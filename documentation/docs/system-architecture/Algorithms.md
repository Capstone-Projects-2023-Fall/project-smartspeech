---
sidebar_position: 1
---
# Algorithms

Below are the algorithms that will be utilized in this project. 

### Sketch Recognition

To classify drawings we have implemented a Convolutional Neural Network (CNN) with around one million parameters. This neural network was constructed with the help of the TensorFlow Keras library, exported for use in TensorFlowJS. The training data used was from the [Google Quick, Draw! dataset](https://quickdraw.withgoogle.com/data). The model currently recognizes 33 different drawings which are all directly mapped to tiles in our dictionary. The model is lightweight enough to be run on mobile devices with a quick inference time. 

### Image Recognition

To identify what objects are being captured by the devices camera, this project has implemented an image classifier to achieve this task. The model is connected to Amazon Rekognition, which uses a pre-trained model to label and classify images in real time.

### Word Similarity Search

In AAC, one image could represent a few different (but similar) words. For example, if someone drew a circle, we would want the system to suggest tiles such as 'circle', 'shape', or even 'ball'. Our image classification model may not always capture all of these possibilities. To get around this, we have implemented natural language processing (NLP) to capture context and similarly related words. We use the spaCy library to achieve this goal. The model essentially converts words into embedded vectors. Cosine similarity can be used between vectors to extract similar words.
