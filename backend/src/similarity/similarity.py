# Build vocab from predone tiles
words = ["again", "also", "angry", "animal", "ask", "bad", "bathroom", "because", "blue", "blueberry", "boat", "bowl", "bread", "bridge", "brown", "bug", "bus", "call", "car", "carrot", "cat", "change", "cheese", "circle", "clothes", "confused", "could", "cup", "day", "diamond", "dog", "drink", "eat", "even", "excited", "feelings", "fire", "flower", "forest", "fork", "game", "glass", "glue", "go", "good", "goodbye", "green", "guess", "hamburger", "hammer", "happy", "hat", "hear", "hello", "home", "hospital", "hurt", "instead", "it", "job", "lake", "learn", "listen", "love", "meat", "milk", "mountain", "myturn", "nervous", "nice", "no", "ocean", "okay", "orange", "paint", "paintbrush", "pants", "paper", "pen", "pencil", "pet", "pink", "pizza", "plate", "please", "purple", "ready", "rectangle", "red", "rice", "road", "ruby", "sad", "say", "scared", "school", "scissors", "screwdriver", "self", "shirt", "shoes", "shy", "sick", "silly", "sky", "smart", "sorry", "sound", "speak", "sponge", "spoon", "square", "stickers", "still", "stone", "stop", "store", "strawberry", "taco", "tape", "taste", "tell", "thankyou", "things", "think", "this", "tired", "tools", "tree", "triangle", "underwear", "vegetable", "water", "wood", "would", "write", "yes", "you"]
vocab = ""
for word in words:
    vocab += word + " "

import spacy
from typing import List

# Build word vectors for vocab
nlp = spacy.load('en_core_web_lg')
tokens = nlp(vocab)

def main():
    print(similar(["fruit", "blue", "berry"]))

def similar(words: List[str]) -> List[str]:
    """Check a list of words against preset tiles for suggestions"""
    similarities = []
    for word in words:
        token = nlp(word)
        similarities.append(vocab_similarity(token))
    return [similarity[0] for similarity in similarities]

def vocab_similarity(word) -> List[float]:
    sim_scores = {}
    for token in tokens:
        sim_scores[token.similarity(word)] = token.text
    top = list(sim_scores.keys())
    top.sort(reverse=True)
    suggestions = [sim_scores.get(key) for key in top[0:3]]
    return suggestions


if __name__ == "__main__":
    main()