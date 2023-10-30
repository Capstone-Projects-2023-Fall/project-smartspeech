import os


def pytest_generate_tests(metafunc):
    os.environ['SPACY_MODEL'] = 'en_core_web_md'