---
sidebar_position: 1
---

# System Overview  
  
## Project Abstract  
  
Many groups of people cannot speak verbally or have lost the ability to do so. This includes people with conditions such as autism, cerebral palsy, ALS, stroke survivors with aphasia, traumatic brain injury, developmental disorders, and many more. One of the widespread solutions to deliver speech to these individuals are AAC apps. These apps contain a navigable grid of images paired with words that a user will select to *say* the word they require. An image must be paired with the word as many of the end users of AAC apps cannot read.   

However, these AAC apps are an imperfect solution to a large problem. Users are required to navigate through **nested** menus to get to the word they need making the initial learning curve for alternative communication apps steep[^1]. The training process involves having a Speech-Language Pathologist (SLP) onsite and extensive training for any instructor using AAC tools. 

SmartSpeech aims to resolve these issues by altering the AAC experience with Machine Learning (ML) and Image Recognition. Currently, the primary deterrent for AAC apps is having to navigate very complex menus to get to relevant words. The proposed solution includes a drawing canvas where a user can draw the item they wish to represent and an ML model would suggest related items to say which eliminates the need to interface with complex menus to find required words. In addition to a drawing canvas, SmartSpeech will also take images of a user's environment and suggest detected objects to make it easier to inject them into regular conversation rather than having to find them in the standard menu. The overarching goal of SmartSpeech is to reduce the reliance of AAC users on other people for communication by making it easier for them to find relevant words which will help them stay more engaged in conversations.
  
## Conceptual Design
The drawing aspect of SmartSpeech will be handled with `HTMLCanvas` on the fronted due to its extensive support for both mouse and touch/stylus based interactions. When a user is done drawing their image, it will be sent to the backend which will compute the drawing to word association with varying methods:
+ Custom drawing recognition model 
+ External Image Recognition provider (ex: AWS Rekognition, OpenAI)
+ Ensemble of Image Recognition models

This same method will be applied to assist in recognize the user's surroundings. The backend will be the main actor in helping users avoid large menus by suggesting appropriate words based on drawings. The backend will be containerized or run on virtual machines in the cloud to make it easy to scale.  

## Background

This tool is novel in the sense that other AAC tools like Fluent AAC[^2] and AssistiveWare[^3] are focused on adding more symbols and expressions but do not integrate intelligence into their AAC app like *SmartSpeech*. Most other competitor apps are very expensive with many being nearly three hundred dollars[^4]. In short, *SmartSpeech* aims to differentiate itself from alternative AAC Apps by taking an open-source approach of utilizing drawing and image recognition to help users utilize their AAC devices.  

[^1]: https://ussaac.org/speakup/articles/key-aac-issues/
[^2]: Competitor - Fluent AAC: https://www.fluentaac.com/
[^3]: Competitor - AssistiveWare AAC: https://www.assistiveware.com/products
[^4]: AAC Pricing - https://www.speechandlanguagekids.com/aac-apps-review/
