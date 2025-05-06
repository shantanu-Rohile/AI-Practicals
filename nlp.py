import nltk
from nltk.tokenize import word_tokenize
from nltk import FreqDist, pos_tag
from nltk.corpus import stopwords

# Force re-download of required NLTK data
nltk.download('punkt_tab')
nltk.download('punkt', force=True)
nltk.download('stopwords')
nltk.download('averaged_perceptron_tagger_eng')

# --- Helper Functions ---
def text_tokenization(text):
    return word_tokenize(text)

def count_word_frequency(tokens):
    return FreqDist(tokens)

def remove_stop_words(tokens):
    stop_words = set(stopwords.words('english'))
    return [word for word in tokens if word.lower() not in stop_words]

def pos_tagging(tokens):
    return pos_tag(tokens)

# --- Input Text ---
text = "Natural Language Processing is a fascinating field of Artificial Intelligence."

# --- User Operation Selection ---
operation = input("Select operation (a. Tokenization, b. Word Frequency, c. Remove stop words, d. POS Tagging): ").lower()

# --- Process Based on Operation ---
if operation == 'a':
    tokens = text_tokenization(text)
    print("Tokens:")
    print(tokens)

elif operation == 'b':
    tokens = text_tokenization(text)
    freq_dist = count_word_frequency(tokens)
    print("Word Frequency:")
    for word, frequency in freq_dist.items():
        print(f"{word}: {frequency}")

elif operation == 'c':
    tokens = text_tokenization(text)
    filtered_tokens = remove_stop_words(tokens)
    print("Tokens without Stop Words:")
    print(filtered_tokens)

elif operation == 'd':
    tokens = text_tokenization(text)
    pos_tags = pos_tagging(tokens)
    print("POS Tags:")
    for word, tag in pos_tags:
        print(f"{word} → {tag}")

else:
    print("Invalid operation. Please select a, b, c, or d.")
