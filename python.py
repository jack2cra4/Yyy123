# हिंदी-इंग्लिश रीडिंग मास्टर कोड
# बाएं (Left) = इंग्लिश, दाएं (Right) = हिंदी

reading_master_chart = {
    "Newspaper": "अखबार",
    "Book": "किताब",
    "Read": "पढ़ना",
    "News": "खबर",
    "Today": "आज",
    "Important": "महत्वपूर्ण",
    "Government": "सरकार",
    "Country": "देश",
    "Development": "विकास",
    "Work": "काम",
    "Attention": "ध्यान",
    "Education": "शिक्षा",
    "Success": "सफलता",
    "World": "दुनिया",
    "Truth": "सच"
}

def search_word(english_word):
    # यह फंक्शन आपको हिंदी मतलब बताएगा
    return reading_master_chart.get(english_word, "यह शब्द चार्ट में नहीं है।")

# अभ्यास के लिए एक छोटा लूप
print("--- रीडिंग मास्टर कोड चालू है ---")
print("बाहर निकलने के लिए 'exit' टाइप करें")

while True:
    user_input = input("\nइंग्लिश शब्द लिखें: ")
    if user_input.lower() == 'exit':
        break
    
    meaning = search_word(user_input.capitalize())
    print(f"हिंदी में: {meaning}")

