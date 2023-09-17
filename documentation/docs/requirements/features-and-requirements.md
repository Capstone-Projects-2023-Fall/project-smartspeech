---
sidebar_position: 4
---

# Features and Requirements


### Non-Functional Requirements

- User accounts will not be required for the drawing, camera, or tile features.
  - Accounts will allow users to save custom tiles, but access to AAC features will not be inhibited.
  - Performance will NOT be affected by an account- every user can expect the same load times (as per their internet connection).

- The UI will be accessible to those who cannot read
  - All major buttons will be represented with pictures such as checkmarks, red crosses, smiley faces and more.
  - Account setup will require some reading power, but this feature will be aimed at speech pathologists/supervising adults rather than an actual AAC user. 

- We will use a form of lazy-loading to ensure that the app is not slowed down by loading a large number of custom tiles. A tile will be loaded when it is selected, meaning subsequent uses after the first will also be sped up.

- User login information will be properly salt + peppered to keep the information safe from malicious entites.

- The entire application will exist as a single-page app. This is to improve usability for AAC users- multiple pages may become confusing or irritating to navigate.
  - Account Creation/Account Logins/Custom Tile Creation/Tile Navigation will all be popups that appear overtop of the main screen, ensuring the app is not confusing to navigate.
