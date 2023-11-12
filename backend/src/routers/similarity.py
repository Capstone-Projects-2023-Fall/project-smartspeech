import json
import time
from pydantic import BaseModel
from typing import List, Annotated
from fastapi import APIRouter, Depends
from functools import cache
import spacy

class SimilarityModel(BaseModel):
    words: List[str]

class SimilarityResponseModel(BaseModel):
    suggestions: List[str]

SIMILARITY_ROUTE = "/similarity"

router = APIRouter()

@cache
def load_model():
    print("Loading model...")
    start = time.perf_counter()

    model_name = "en_core_web_lg"
    nlp = spacy.load(model_name)

    end = time.perf_counter()
    print(f"Loading '{model_name}' took {end-start}s.")

    return nlp

@cache
def parse_vocab():
    """Allows vocab injection and runtime vocab changes"""
    print("Importing vocab...")
    # Import vocab from json file
    f = open("resources/words.json")
    tiles = json.load(f)["tiles"]
    vocab = " ".join(tiles)
    return vocab


@router.post(SIMILARITY_ROUTE)
async def similarity(base_words: SimilarityModel, nlp: Annotated[spacy.Language, Depends(load_model)], 
                     vocab: Annotated[dict, Depends(parse_vocab)], count: int = 5) -> SimilarityResponseModel:
    """Get **count** words similar to **words**
    
    Picks the **count** most similar words from the manual tiles based on **words**.

    Returns a list of **count** strings.
    """
    start = time.perf_counter()

    words = base_words.words
    tmp_suggestions = []
    # Generate word vectors for vocab
    vocab = nlp(vocab)
    for word in words:
        # Get vectors for word
        word = nlp(word)
        # Generate dictionary {word_similarity: word} if both words are in the model's vocab, ignoring those that are in the input text
        scores = { word.similarity(token): token.text for token in vocab if token.has_vector and word.has_vector and token.text not in words }
        # Sort scores to find highest similarity
        top = list(scores.keys())
        top.sort(reverse=True)
        # Add #count suggestions to list
        tmp_suggestions = [scores.get(key) for key in top[0:count]]
        tmp_suggestions += tmp_suggestions
    # Compare suggestions to entire word input for final pruning
    # This allows us to 
    doc = nlp(" ".join(words))
    final_suggestions = { suggestion.similarity(doc): suggestion.text for suggestion in nlp(" ".join(tmp_suggestions)) if suggestion.vector_norm }
    top = list(final_suggestions.keys())
    top.sort(reverse=True)
    top_suggestions = [final_suggestions.get(key) for key in top[0:count]]

    end = time.perf_counter()
    print(f"Finding {count} suggestions took {end-start}s")

    if len(top_suggestions) > 0:
        return { "suggestions": top_suggestions }
    return { "suggestions": [] }