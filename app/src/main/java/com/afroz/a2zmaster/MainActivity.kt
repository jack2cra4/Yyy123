package com.afroz.a2zmaster

import android.os.Bundle
import android.speech.tts.TextToSpeech
import android.webkit.JavascriptInterface
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Button
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import java.util.Locale

class MainActivity : AppCompatActivity(), TextToSpeech.OnInitListener {

    private lateinit var webView: WebView
    private lateinit var btnSpeaker: Button
    private lateinit var btnPlay: Button
    private lateinit var btnStop: Button
    private lateinit var btnLang: Button

    // Only ever touched on the Main thread.
    private var tts: TextToSpeech? = null

    // Volatile so the JS-bridge background thread can safely read readiness/mute state.
    @Volatile
    private var ttsReady = false

    @Volatile
    private var muted = false

    @Volatile
    private var englishVoice = false

    @Volatile
    private var lastSpoken = ""

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.webview)
        btnSpeaker = findViewById(R.id.btnSpeaker)
        btnPlay = findViewById(R.id.btnPlay)
        btnStop = findViewById(R.id.btnStop)
        btnLang = findViewById(R.id.btnLang)

        setupWebView()
        setupButtons()

        // TTS is constructed on the Main thread and must always be used from it.
        tts = TextToSpeech(this, this)
    }

    private fun setupWebView() {
        webView.settings.javaScriptEnabled = true
        webView.settings.domStorageEnabled = true
        webView.settings.allowFileAccess = true
        webView.settings.mediaPlaybackRequiresUserGesture = false
        webView.webViewClient = WebViewClient()
        webView.addJavascriptInterface(A2ZBridge(), "AndroidBridge")
        webView.loadUrl("file:///android_asset/www/index.html")
    }

    private fun setupButtons() {
        btnSpeaker.setOnClickListener {
            muted = !muted
            if (muted) stopSafe()
            updateSpeakerButton()
            pushStateToJs()
        }

        btnPlay.setOnClickListener {
            if (!ttsReady) {
                toast(getString(R.string.tts_initializing))
                return@setOnClickListener
            }
            if (muted) {
                muted = false
                updateSpeakerButton()
                pushStateToJs()
            }
            val text = lastSpoken
            if (text.isNotBlank()) {
                speakSafe(text)
            } else {
                toast("पहले कोई शब्द चुनें")
            }
        }

        btnStop.setOnClickListener {
            stopSafe()
        }

        btnLang.setOnClickListener {
            englishVoice = !englishVoice
            applyTtsLanguageSafe()
            updateLangButton()
            pushStateToJs()
        }
    }

    // ---------- TTS init ----------

    override fun onInit(status: Int) {
        ttsReady = status == TextToSpeech.SUCCESS
        if (ttsReady) {
            applyTtsLanguageSafe()
        } else {
            toast(getString(R.string.tts_unavailable))
        }
        pushStateToJs()
    }

    /**
     * Applies the current voice locale with a safe fallback chain:
     * Hindi-IN -> English-IN -> English -> system default.
     */
    private fun applyTtsLanguageSafe() {
        val t = tts ?: return
        try {
            val wanted = if (englishVoice) Locale.forLanguageTag("en-IN")
                         else Locale.forLanguageTag("hi-IN")
            var result = t.setLanguage(wanted)
            if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                result = t.setLanguage(Locale.ENGLISH)
            }
            if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                result = t.setLanguage(Locale.US)
            }
            if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                result = t.setLanguage(Locale.getDefault())
            }
            t.setSpeechRate(0.85f)
            t.setPitch(1.0f)
        } catch (e: Exception) {
            // Never crash the app because of a TTS voice hitch.
        }
    }

    // ---------- Safe speak / stop (Main thread only) ----------

    private fun speakSafe(text: String): Boolean {
        lastSpoken = text
        val t = tts
        if (t == null || !ttsReady) return false
        return try {
            val id = "utt_${System.currentTimeMillis()}"
            // QUEUE_FLUSH: a fresh tap instantly replaces whatever is playing.
            t.speak(text, TextToSpeech.QUEUE_FLUSH, null, id) == TextToSpeech.SUCCESS
        } catch (e: Exception) {
            false
        }
    }

    private fun stopSafe() {
        try {
            tts?.stop()
        } catch (e: Exception) {
            // TTS stop must never crash the app.
        }
    }

    private fun updateSpeakerButton() {
        try {
            btnSpeaker.text = if (muted) "🔇  OFF" else "🔊  ON"
        } catch (e: Exception) {
        }
    }

    private fun updateLangButton() {
        try {
            btnLang.text = if (englishVoice) "EN" else "हिं"
        } catch (e: Exception) {
        }
    }

    // ---------- Main-thread helper for the JS bridge ----------
    // The WebView JS bridge runs on a background thread; every call that reaches
    // the TTS engine must be marshalled back to the Main thread.
    private fun runOnMain(runnable: () -> Unit) {
        try {
            runOnUiThread(runnable)
        } catch (e: Exception) {
            // Activity finishing / Looper quitting: swallow, never crash.
        }
    }

    private fun speakSafeFromBridge(text: String) {
        runOnMain { speakSafe(text) }
    }

    // ---------- Android <-> JS state sync ----------

    private fun pushStateToJs() {
        val state = buildString {
            append("{")
            append("\"ready\":").append(ttsReady)
            append(",\"muted\":").append(muted)
            append(",\"english\":").append(englishVoice)
            append("}")
        }
        runOnMain {
            try {
                if (::webView.isInitialized) {
                    webView.evaluateJavascript(
                        "window.androidUiChange && window.androidUiChange($state)", null
                    )
                }
            } catch (e: Exception) {
                // A dead WebView must not crash the app.
            }
        }
    }

    private fun toast(msg: String) {
        runOnMain {
            try {
                Toast.makeText(this, msg, Toast.LENGTH_SHORT).show()
            } catch (e: Exception) {
            }
        }
    }

    // ---------- JS bridge ----------

    inner class A2ZBridge {
        /**
         * Returns true when the native TTS engine handled the request.
         * The frontend falls back to the Web Speech API when this returns false.
         */
        @JavascriptInterface
        fun speak(text: String?): Boolean {
            if (text.isNullOrBlank()) return false
            // Read-only, safe on the bridge thread.
            if (!ttsReady || muted) return false
            speakSafeFromBridge(text)
            return true
        }

        @JavascriptInterface
        fun stop() {
            runOnMain { stopSafe() }
        }

        @JavascriptInterface
        fun isReady(): Boolean = ttsReady && !muted
    }

    override fun onResume() {
        super.onResume()
        pushStateToJs()
    }

    override fun onDestroy() {
        try {
            tts?.stop()
            tts?.shutdown()
        } catch (e: Exception) {
            // TTS teardown must never crash.
        }
        tts = null
        ttsReady = false
        super.onDestroy()
    }
}