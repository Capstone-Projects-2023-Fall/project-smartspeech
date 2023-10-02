---
sidebar_position: 1
---
# Algorithms

Below are the algorithms that will be utilized in this project. 

### Image Classification

An obvious algorithm required for this project is an image classification model. This is accomplished with the help of deep learning. While a custom model could be built, it would be difficult and expensive to find training data and to have sufficient hardware to effectively host this model. To solve this problem, a few different resources can be utilized. The first is Digital Ink Recognition by Google, which is a free model built specifically to recognize hand-drawn sketches. The problem with this model is that it would be difficult to implement into a PWA. Another option is OFA, which is a visual question-answering system. It takes an image and a text prompt as input and outputs text answering the question. Other API services for image recognition exist; however, they are costly and trained on images different from what we will be using. 

### Word Similarity Search

In AAC, one image could represent a few different (but similar) words. For example, if someone drew a circle, we would want the system to suggest tiles such as 'circle', 'shape', or even 'ball'. Our image classification model may not always capture all of these possibilities. To get around this, we need to implement some type of natural language processing (NLP) to capture context and similarly related words. This is not a trivial task; however, we can use FastText from Facebook Research to achieve this goal. FastText works by first preparing a dataset (which will be the dictionary of all AAC words), training the model, and then using the model. The model essentially converts words into embedded vectors. Cosine similarity can be used between vectors to extract similar words.
