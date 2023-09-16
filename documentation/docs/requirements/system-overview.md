---
sidebar_position: 1
---

# System Overview  
  
## Project Abstract  
  
AAC (augmentative and alternative communication) apps are alternative communication interfaces that allow non-verbal individuals to express themselves via TTS (text-to-speech). Nevertheless, many of these applications pose significant usability challenges, often necessitating extensive training and even the presence of a Speech-Language Pathologist (SLP) for user guidance. This problem is further compounded by educators lacking proper training in assisting AAC users[^1]. Numerous studies have underscored the critical role of instructor training as a major obstacle to the success of AAC. Moreover, the financial burden associated with AAC tools presents a substantial hurdle, as these devices are costly and typically cannot be taken home for continued training.  
  
SmartSpeech aims to resolve these issues by altering the AAC experience with Machine Learning (ML) and Image Recognition. Currently, the primary deterrent for AAC apps is having to navigate very complex menus to get to relevant words. The proposed solution includes a drawing canvas where a user can draw the item they wish to represent and an ML model would suggest related items to say. This will eliminate complex menu navigation and reduce training times. In addition to drawing recognition, the Progressive Web App (PWA) will be able to access the camera. This ability will enable SmartSpeech to scan for objects to suggest on the app further reducing the time it takes to form a sentence.  
  
## Conceptual Design

The frontend will be built on Next.js so there will be no delay in page rendering, unlike standard React.js SPAs. Next.js will also allow the creation of edge functions to safely contact our backend service without exposing them to the outside world. Given the need for machine learning a Python backend will be required. This backend will be hosted on a cloud platform with other backend instances on standby in case the server load exceeds computation power or a node goes down. The backends will likely run a pre-trained model so only a low number of computations are required, this way the backend nodes can be lightweight and cost-effective. An alternative backend architecture would include a containerized backend where instead of VMs, containers would be used for easy swaps.

## Background

This tool is novel in the sense that other AAC tools like Fluent AAC[^2] and AssistiveWare[^3] are focused on adding more symbols and expressions but do not integrate intelligence into their AAC app like *SpeechSmart*. Most other competitor apps are very expensive with many being nearly three hundred dollars[^4]. In short, *SmartSpeech* aims to differentiate itself from alternative AAC Apps by taking an open-source approach of utilizing drawing and image recognition to help users utilize their AAC devices.  

[^1]: https://ussaac.org/speakup/articles/key-aac-issues/
[^2]: Competitor - Fluent AAC: https://www.fluentaac.com/
[^3]: Competitor - AssistiveWare AAC: https://www.assistiveware.com/products
[^4]: AAC Pricing - https://www.speechandlanguagekids.com/aac-apps-review/
