import json
from typing import List, Annotated
from fastapi import APIRouter, Depends
from fastapi.responses import Response, JSONResponse
import spacy

SIMILARITY_ROUTE = "/similarity"

router = APIRouter()

model_name = "en_core_web_lg"
nlp = spacy.load(model_name)
vocab_path = "resources/words.json"

def parse_vocab():
    """Allows vocab injection and runtime vocab changes"""
    # Import vocab from json file
    f = open(vocab_path)
    data = json.load(f)["tiles"]
    words = ""
    # Combine words into document
    for word in data:
        words += word + " "
    # Build word vectors for vocab
    tokens = nlp(words)

    return {"tokens": tokens}


@router.post(SIMILARITY_ROUTE)
async def similarity(words: List[str], config: Annotated[str, Depends(set_config)]) -> Response:
    tokens = config["tokens"]  
    tmp_suggestions = []
    for word in words:
        word = nlp(word)
        # Generate dictionary of the form similarity_score: token_text
        scores = { token.similarity(word): token.text for token in tokens if token.vector_norm and word.vector_norm }
        # Sort scores to find highest similarity
        top = list(scores.keys())
        top.sort(reverse=True)
        # Add top 3 suggestions to list
        tmp_suggestions = [scores.get(key) for key in top[0:3]]
        tmp_suggestions += tmp_suggestions
    # Compare suggestions to entire list for final pruning
    doc = nlp("".join(words))
    final_suggestions = { doc.similarity(suggestion): suggestion.text for suggestion in tmp_suggestions if suggestion.vector_norm }
    top = list(final_suggestions.keys())
    top.sort()
    top_suggestions = [final_suggestions.get(key) for key in top[0:3]]
    if len(top_suggestions) > 0:
        return JSONResponse(top_suggestions)
    return JSONResponse([])
