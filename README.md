[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=11814773)

<div align="center">

# Project Name

[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://capstone-projects-2023-fall.github.io/project-smartspeech/)

</div>

## Keywords

AI / ML, Web Development, AAC, Accessible technology, Cloud Computing

## Project Abstract

AAC (augmentative and alternative communication) apps are alternative communication interfaces that allow non-verbal individuals to express themselves via TTS (text-to-speech). Many of these tools are hard to use and it takes significant training to do so including having a Speech-Language Pathologist (SLP) on-site. Some tools are so hard to use that SLPs have to model the actions to the AAC tool User[^1]. This proposal presents a revamp of the standard AAC tool which has users navigate through nested menus to find a word. This revamp presents an ML image recognition where users can draw on a web canvas to help them find the word they are looking for in their AAC menu. An optional extension to the app would include the device cameras to suggest words that relate to the objects around them.

## High-Level Requirement

Foundationally, this app should be able to intake a user drawing and use that drawing to query the words stored in the app's word dictionary. After the user draws their image and submits it, a few words that relate to or represent the drawing should appear as AAC speech suggestions. This web app will need to be a PWA to offer an integrated experience for anyone using it due to the target audience. Optionally, the app can feature a camera capture machine learning (ML) model that can suggest words that are contextually relevant to their surroundings. If drawing or camera suggestions, are not fitting the context, users should be able to simply search the directory for words to express themselves manually.

Since the audience we are targeting may have learning disabilities the image translation and word suggestions must be instantaneous so we can help them learn the cause-and-effect relation between drawing and word suggestions.

## Conceptual Design

The frontend will be built on Next.js so there will be no delay on page rendering, unlike standard React.js pages. Next.js will also allow the creation of edge functions to safely contact our backend service without exposing them to the outside world. Given the need for machine learning a Python backend will probably be required. This backend will be hosted likely on AWS or some other cloud provider with other backends on standby in case the server load exceeds computation power or a node goes down. The backends will likely run a pre-trained model so only a low number of computations are required, this way the backend nodes can be lightweight and cost-effective.

## Background

This tool is novel in the sense that other AAC tools like Fluent AAC[^2] and AssistiveWare[^3] are focused on adding more symbols and expressions but do not integrate intelligence into their AAC app like _SpeechSmart_. Something else we would like to improve is the cost of these apps. Most other competitor apps are very expensive with many being nearly three hundred dollars[^4].

## Required Resources

- Machine Powerful enough for Image Related ML Tasks
- NEXT.js (React.js)
- Terraform (Infrastructure as Code Tool)
- AWS Suite -- Services that are used:
  - AWS S3 (Object Storage)
  - AWS Rekognition
  - AWS RDS (Relational Database Service)
  - AWS Networking Resources (VPC)
  - AWS Fargate (Containerization)

## Summary of Features

- Users are able to log in using a third party providers.
  - Users are not required to create an account for the drawing, camera, or tile features.
  - Account data can be accessed across devices.
  - Users who log in are able to add custom tiles that appear on the manual board.
- When the user draws an object, the system recognizes the drawing after a short delay and provides tiles of words that resemble the perceived object based on the drawing.
  - Users are able to select tiles, causing the system to audibly announce the object's name.
  - Users are able to undo one stroke or erase the entire drawing in the case their drawing is not recongized.
- If the user permits camera usage, the system alternates between the front and back facing cameras, recognizing objects and provides tiles of words the resemble perceived objects in the camera.
  - This setting can be turned on and off using a button in the top right-hand corner of the screen.
- When a tile is pressed, it is added to the tiles bar at the top of the screen.
  - All tiles in the tile bar can be played as a sentence.
  - Users can delete the most recent tile or delete all tiles in the tile bar.
- Audio data is cached to provide faster service to the user.
- The app is able to be used by a user who cannot read. Further, the app minus caretaker features are all on one page, making the app easy to navigate.

## How to Run the Full Application

### Frontend

The frontend contains minimal configuration and can be run via:

```shell
cd ./frontend
npm i
npm run dev
```

You will need to create a secret file at frontend/.env.local containing:

> `NEXT_PUBLIC_PROG_MODE` will need to be one of "DEV" or "PROD"

```
NEXT_PUBLIC_VOICE_SPEED=
NEXT_PUBLIC_BACKEND_URL_DEV=
NEXT_PUBLIC_BACKEND_URL_PROD=
NEXT_PUBLIC_PROG_MODE=
```

A more _secret_ file will also need to be under the name of `.env.local` which requires the following fields to enable auth.

```text
# Facebook
FACEBOOK_ID=""
FACEBOOK_SECRET=""

# Github
GITHUB_ID=""
GITHUB_SECRET=""

# Google Firebase
GOOGLE_FB_ID=""
GOOGLE_FB_SECRET=""

NEXTAUTH_URL=""
```

If the project is still being supported it will be hosted via [Vercel](https://project-smartspeech.vercel.app/). Remember to take a look at `frontend/.env` to ensure a correct configuration. If you are going to run the backend (see below) yourself, make sure to set the `NEXT_PUBLIC_PROG_MODE` to `DEV` instead of `PROD`.

### Backend

Steps:

1. Step into the Python-based backend folder:

```shell
cd ./backend
```

2. Create a virtual environment called 'env' (repeat only ONCE). Ensure you have `python3.10`.

```shell
python3 -m venv ./env
```

3. Activate this environment and install all packages

```shell
source env/bin/activate
pip install -r requirements.txt
```

4. Fill out the secrets file (you will need to create a file at `backend/src/.env.local`). It looks like:

```
# TTS Params
TTS_API_KEY=""
TTS_API_URL=""

# S3 Params
BUCKET_NAME=""
ACCESS_KEY=""
SECRET_KEY=""
OBJECT_URL=""
AWS_REGION=""

# RDS Params
CT_DB_URL=""
CT_DB_PORT=""
CT_DB_USERNAME=""
CT_DB_PASSWORD=""
```

For the S3 params notice the AWS Key fields. You will want to create an IAM user with minimal privileges to ensure the principle of least privilege for access. You want this user to have nearly full access to your created S3 bucket (see Infrastructure below) and a `delectLabel` permission on AWS Rekognition.

Notice all the DB params. The first two will be generated by terraform. The last two are variables (`username`, `password`) set by you when running the Terraform script below in the terraform section.

5. Run the backend!

```shell
uvicorn src.main:app --reload --env-file ./src/.env.local
```

6. To test the backend, you also need to run

```
python -m spacy download en_core_web_md
```

### Infrastructure Deployment

#### S3

The app above needs a `s3` bucket to run as implied by the backend secrets and frontend `.env` files. You need to simply create an AWS bucket with a public read and private write via an S3 Bucket policy.

Here is our bucket policy that allows for a public read yet private write:

> The first `statement` is not required.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowMyAccountToUpload",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::{YOUR_AWS_ID_HERE}:root"
      },
      "Action": "s3:PutObject",
      "Resource": "arn:aws:s3:::{YOUR_SELECTED_BUCKET_NAME_HERE}/*"
    },
    {
      "Sid": "AllowPublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": [
        "s3:GetObject",
        "s3:GetObjectVersion",
        "s3:GetObjectAcl",
        "s3:GetObjectVersionAcl"
      ],
      "Resource": [
        "arn:aws:s3:::{YOUR_SELECTED_BUCKET_NAME_HERE}/*",
        "arn:aws:s3:::{YOUR_SELECTED_BUCKET_NAME_HERE}"
      ]
    }
  ]
}
```

#### RDS

The terraform script luckily spawns the database instance for you. You will only need to set its username and password for connections. See the directions below (`Terraform`) to see how to do so.

#### Terraform

This one is complicated as it deals with the creation of cloud resources on the public cloud. There is a file called `variables.tf` and this file is the only one that needs to change for deployment. Since you do not own the same domain names I do and you do not want to name each item the way I name it you will need to change name strings in this file.

Here is an example of one field that will need to change:

```terraform
variable "r53_domain_info" {
  type = map(string)
  default = {
    cert_domain = "smart-speech.backend-aws.com"
    domain      = "backend-aws.com"
  }
}
```

You **do not** own this domain or the certificate for this domain. Therefore, you will need to enter your own domain (registred in `route53` or one which contains a hosted zone in `route53`) and then generate a certificate for it via ACM (AWS Certificate Manager).

The rest of the deployment directions are located in `terraform/readme.md` which details how to keep Terraform secrets which are used to hide the user/password to the RDS database deployed by terraform.

### Collaborators

[//]: # " readme: collaborators -start "

<table>
<tr>
    <td align="center">
        <a href="https://github.com/Parth099">
            <img src="https://avatars.githubusercontent.com/u/33704202?s=96&v=4" width="100;" alt="ParthPatel"/>
            <br />
            <sub><b>Parth Patel</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/LandenLloyd">
            <img src="https://avatars.githubusercontent.com/u/70919337?s=64&v=4" width="100;" alt="LandenLloyd"/>
            <br />
            <sub><b>Landen Lloyd</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Zahmadgit">
            <img src="https://avatars.githubusercontent.com/u/112338853?s=64&v=4" width="100;" alt="ZeshanAhmad"/>
            <br />
            <sub><b>Zeshan Ahmad</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/anthonyjromann">
            <img src="https://avatars.githubusercontent.com/u/76930172?s=64&v=4" width="100;" alt="AnthonyRoman"/>
            <br />
            <sub><b>Anthony Roman</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/cvto1021">
            <img src="https://avatars.githubusercontent.com/u/67194501?s=64&v=4" width="100;" alt="CynthiaTo"/>
            <br />
            <sub><b>Cynthia To</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/triplehamburger">
            <img src="https://avatars.githubusercontent.com/u/50925468?s=64&v=4" width="100;" alt="AlexanderRajasekaran"/>
            <br />
            <sub><b>Alexander Rajasekaran</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ruuffian">
            <img src="https://avatars.githubusercontent.com/u/58525247?s=64&v=4" width="100;" alt="LiamMackay"/>
            <br />
            <sub><b>Liam Mackay</b></sub>
        </a>
    </td>
</tr>
</table>

[//]: # " readme: collaborators -end "

[^1]: What is AAC Modeling? www.assistiveware.com/learn-aac/start-modeling
[^2]: Competitor - Fluent AAC: https://www.fluentaac.com/
[^3]: Competitor - AssistiveWare AAC: https://www.assistiveware.com/products
[^4]: AAC Pricing - https://www.speechandlanguagekids.com/aac-apps-review/
