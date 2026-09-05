package com.afroz.a2zmaster

import android.os.Bundle
import android.speech.tts.TextToSpeech
import android.webkit.JavascriptInterface
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import java.util.Locale
import kotlin.random.Random

class MainActivity : AppCompatActivity(), TextToSpeech.OnInitListener {

    private lateinit var webView: WebView
    private lateinit var btnSpeaker: Button
    private lateinit var btnPlay: Button
    private lateinit var btnStop: Button
    private lateinit var btnLang: Button
    private lateinit var headerTitle: TextView

    private var tts: TextToSpeech? = null
    private var ttsReady = false
    private var muted = false
    private var englishVoice = false
    private var lastSpoken = ""

    private val utteranceId = Random.nextInt(1, Int.MAX_VALUE)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.webview)
        btnSpeaker = findViewById(R.id.btnSpeaker)
        btnPlay = findViewById(R.id.btnPlay)
        btnStop = findViewById(R.id.btnStop)
        btnLang = findViewById(R.id.btnLang)
        headerTitle = findViewById(R.id.headerTitle)

        setupWebView()
        setupButtons()

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
            if (muted) tts?.stop()
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
            }
            if (lastSpoken.isNotBlank()) {
                speak(lastSpoken)
            } else {
                toast("पहले कोई शब्द चुनें")
            }
        }

        btnStop.setOnClickListener {
            tts?.stop()
        }

        btnLang.setOnClickListener {
            englishVoice = !englishVoice
            applyTtsLanguage()
            updateLangButton()
            pushStateToJs()
        }
    }

    // ---------- TTS ----------

    override fun onInit(status: Int) {
        if (status == TextToSpeech.SUCCESS) {
            ttsReady = true
            applyTtsLanguage()
            pushStateToJs()
        } else {
            ttsReady = false
            toast(getString(R.string.tts_unavailable))
        }
    }

    private fun applyTtsLanguage() {
        val t = tts ?: return
        val res = if (englishVoice) {
            t.setLanguage(Locale.forLanguageTag("en-IN"))
        } else {
            val r = t.setLanguage(Locale.forLanguageTag("hi-IN"))
            if (r == TextToSpeech.LANG_MISSING_DATA || r == TextToSpeech.LANG_NOT_SUPPORTED) {
                t.setLanguage(Locale.ENGLISH)
            } else r
        }
        t.setSpeechRate(0.85f)
        t.setPitch(1.0f)
    }

    private fun speak(text: String) {
        lastSpoken = text
        val t = tts ?: return
        if (muted) return
        markSpeaking(true)
        val id = "utt_${utteranceId}_${System.currentTimeMillis()}"
        t.speak(text, TextToSpeech.QUEUE_FLUSH, null, id)
    }

    private fun markSpeaking(speaking: Boolean) {
        runOnUiThread {
            pushStateToJs()
        }
    }

    private fun updateSpeakerButton() {
        btnSpeaker.text = if (muted) "🔇  OFF" else "🔊  ON"
    }

    private fun updateLangButton() {
        btnLang.text = if (englishVoice) "EN" else "हिं"
    }

    private fun pushStateToJs() {
        val state = buildString {
            append("{")
            append("\"ready\":").append(ttsReady)
            append(",\"muted\":").append(muted)
            append(",\"english\":").append(englishVoice)
            append("}")
        }
        runOnUiThread {
            if (::webView.isInitialized) {
                webView.evaluateJavascript("window.androidUiChange && window.androidUiChange($state)", null)
            }
        }
    }

    private fun toast(msg: String) {
        runOnUiThread {
            Toast.makeText(this, msg, Toast.LENGTH_SHORT).show()
        }
    }

    // ---------- JS bridge ----------

    inner class A2ZBridge {
        @JavascriptInterface
        fun speak(text: String?) {
            if (text.isNullOrBlank()) return
            runOnUiThread { speak(text) }
        }

        @JavascriptInterface
        fun stop() {
            tts?.stop()
        }
    }

    override fun onResume() {
        super.onResume()
        pushStateToJs()
    }

    override fun onDestroy() {
        tts?.stop()
        tts?.shutdown()
        super.onDestroy()
    }
}