---
sidebar_position: 4
---

# Features and Requirements

  

## Functional Requirements

- Upon first launch, the system will allow the user to sign up for an account.
	- The system must allow users to login by entering their email and password.
	- An external identity provider service will store and maintain user identity information while also providing security for personal information.
	- The user has the option to not create an account, however this may limit functionality and personalization.

- After account setup (regardless of whether an account was created), the system will present the primary interface, enabling the user to instantly access key functionalities.
	- The user can draw an object, prompting the system display icons that resemble the perceived object based on the drawing.
	- If an icon correctly represents the drawn object, users can select it, causing the system to audibly announce the object's name.
	- If the system fails to recognize the user input or the user doesn't identify a correct icon, they have options to partially erase their drawing or restart from scratch.

- If an icon is not in the system's database, users have the capability to manually add it.
	- Recognizing that certain users may have limitations, the process can be facilitated with the assistance of a caregiver. 
	- The user will illustrate the object and assign a label, enabling the system to identity it in future interactions.
	- This feature is exclusive to users with created accounts, ensuring consistent reference across different devices. 

- If a user permits camera usage, the system can recognize objects through the devices camera.
	- The user has the option to disable this setting.