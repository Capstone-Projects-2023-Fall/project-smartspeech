[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=11814773)
<div align="center">

# Project Name
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://applebaumian.github.io/tu-cis-4398-docs-template/)


</div>


## Keywords

AI / ML, Web Development, AAC,  Accessible technology, Cloud Computing

## Project Abstract
AAC (augmentative and alternative communication) apps are alternative communication interfaces that allow non-verbal individuals to express themselves via TTS (text-to-speech).  Many of these tools are hard to use and it takes significant training to do so including having a Speech-Language Pathologist (SLP) on-site. Some tools are so hard to use that SLPs have to model the actions to the AAC tool User[^1]. This proposal presents a revamp of the standard AAC tool which has users navigate through nested menus to find a word. This revamp presents an ML image recognition where users can draw on a web canvas to help them find the word they are looking for in their AAC menu. An optional extension to the app would include the device cameras to suggest words that relate to the objects around them.    

## High-Level Requirement

Foundationally, this app should be able to intake a user drawing and use that drawing to query the words stored in the app's word dictionary. After the user draws their image and submits it, a few words that relate to or represent the drawing should appear as AAC speech suggestions. This web app will need to be a PWA to offer an integrated experience for anyone using it due to the target audience. Optionally, the app can feature a camera capture machine learning (ML) model that can suggest words that are contextually relevant to their surroundings. If drawing or camera suggestions, are not fitting the context, users should be able to simply search the directory for words to express themselves manually.

Since the audience we are targeting may have learning disabilities the image translation and word suggestions must be instantaneous so we can help them learn the cause-and-effect relation between drawing and word suggestions.

## Conceptual Design

The frontend will be built on Next.js so there will be no delay on page rendering, unlike standard React.js pages. Next.js will also allow the creation of edge functions to safely contact our backend service without exposing them to the outside world. Given the need for machine learning a Python backend will probably be required. This backend will be hosted likely on AWS or some other cloud provider with other backends on standby in case the server load exceeds computation power or a node goes down. The backends will likely run a pre-trained model so only a low number of computations are required, this way the backend nodes can be lightweight and cost-effective. 


## Background

This tool is novel in the sense that other AAC tools like Fluent AAC[^2] and AssistiveWare[^3] are focused on adding more symbols and expressions but do not integrate intelligence into their AAC app like *SpeechSmart*. Something else we would like to improve is the cost of these apps. Most other competitor apps are very expensive with many being nearly three hundred dollars[^4]. 

## Required Resources

+ Machine Powerful enough for Image Related ML Tasks
+ NEXT.js (React.js)
+ Some backend framework that can interface with ML Models
+ Terraform (Infrastructure as Code Tool)
+ AWS Suite -- Services that will be used but are not limited to:
	+ AWS S3 (Object Storage)
	+ AWS Polly (TTS Service)
	+ AWS EC2 (Virtual Machines)
	+ AWS Networking Resources (VPC)
	+ Possible use of AWS Lambda (Serverless Functions) and AWS DynamoDB (NoSQL DB)
	+ Possible use of AWS Fargate or AWS EKS in place of EC2 VMs

 
### Software Requirements

### Collaborators

[//]: # ( readme: collaborators -start )
<table>
<tr>
    <td align="center">
        <a href="https://github.com/ApplebaumIan">
            <img src="https://avatars.githubusercontent.com/u/9451941?v=4" width="100;" alt="ApplebaumIan"/>
            <br />
            <sub><b>Ian Tyler Applebaum</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/leighflagg">
            <img src="https://avatars.githubusercontent.com/u/77810293?v=4" width="100;" alt="leighflagg"/>
            <br />
            <sub><b>Null</b></sub>
        </a>
    </td></tr>
</table>

[//]: # ( readme: collaborators -end )

[^1]: What is AAC Modeling? www.assistiveware.com/learn-aac/start-modeling
[^2]: Competitor - Fluent AAC: https://www.fluentaac.com/
[^3]: Competitor - AssistiveWare AAC: https://www.assistiveware.com/products
[^4]: AAC Pricing - https://www.speechandlanguagekids.com/aac-apps-review/
