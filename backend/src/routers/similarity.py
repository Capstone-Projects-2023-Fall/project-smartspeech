import json

DICT_PATH = "../resources/words.json"

def build_dict(path: str):
    f = open(path)
    data = json.load(f)
    words = data["tiles"]
