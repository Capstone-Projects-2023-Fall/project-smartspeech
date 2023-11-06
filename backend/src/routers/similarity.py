import json
from typing import List
from fastapi import APIRouter
import spacy

# Import vocab from resources
f = open("resources/words.json")
data = json.load(f)["tiles"]
words = ""

# Combine words into document
for word in data:
    words += word + " "
    
# Build word vectors for vocab
model_name = "en_core_web_lg"
nlp = spacy.load(model_name)
tokens = nlp(words)

SIMILARITY_ROUTE = "/similarity"

router = APIRouter()

@router.post(SIMILARITY_ROUTE)
async def similarity(words: List[str]):
    suggestions = similar(words)
    return suggestions

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
        if token.vector_norm and word.vector_norm:
            sim_scores[token.similarity(word)] = token.text
    top = list(sim_scores.keys())
    top.sort(reverse=True)
    suggestions = [sim_scores.get(key) for key in top[0:3]]
    return suggestions