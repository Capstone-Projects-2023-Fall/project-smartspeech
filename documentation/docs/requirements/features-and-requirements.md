---
sidebar_position: 4
---

# Features and Requirements  

## Functional Requirements

- Users must be able to login using their email and password.
	- Users are not required to create an account.
	- Accounts will save user data that can be accessed across devices.

- The user will see the primary interface upon opening the app.
	- The user must be able to draw an object, and the system must be able to recognize drawings and provide tiles of words that resemble the perceived object based on the drawing.
	- If a tile correctly represents the drawn object, users must be able to select it, causing the system to audibly announce the object's name.
	- If the system fails to recognize the user input or the user doesn't identify a correct tile, the user must have options to either partially erase their drawing or restart from scratch.

- The system must allow the addition of custom word tiles.
	- Recognizing that certain users may have limitations, the process can be facilitated with the assistance of a caregiver. 
	- The user will illustrate the object and assign a label, enabling the system to identity it in future interactions.
	- Users with accounts must be able to re-access additional tiles across devices.

- If a user permits camera usage, the system can recognize objects through the devices camera.
	- The user has the option to disable this setting.

### Non-Functional Requirements

- User accounts will not be required for the drawing, camera, or tile features.
  - Accounts will allow users to save custom tiles, but access to AAC features will not be inhibited.
  - Performance will NOT be affected by an account- every user can expect the same load times (as per their internet connection).

- The UI will be accessible to those who cannot read
  - All major buttons will be represented with pictures such as checkmarks, red crosses, smiley faces and more.
  - Account setup will require some reading power, but this feature will be aimed at speech pathologists/supervising adults rather than an actual AAC user. 

- We will use a form of lazy-loading to ensure that the app is not slowed down by loading a large number of custom tiles. A tile will be loaded when it is selected, meaning subsequent uses after the first will also be sped up.
  - A cache of user tiles may be used to improve performance, but the actual audio data will be lazily-loaded.

- User login information will be properly salt + peppered to keep the information safe from malicious entites.

- The entire application will exist as a single-page app. This is to improve usability for AAC users- multiple pages may become confusing or irritating to navigate.
  - Account Creation/Account Logins/Custom Tile Creation/Tile Navigation will all be popups that appear overtop of the main screen, ensuring the app is not confusing to navigate.

- The image recognition feature will be performant with respect to the users internet connection- a user can expect a result in 4-5 seconds.

- When a user presses a tile for audio output, the audio will play slowly and clearly. It is important for this audio to be understandable for users with varying levels of language mastery.
