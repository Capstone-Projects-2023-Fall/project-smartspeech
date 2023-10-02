---
sidebar_position: 3
---

# Sequence Diagrams

## Use Case 1: *Drawing Recognition* - Drawing is Recognized
**User wants to draw a picture to help them communicate, and it is recognized in the top options.**

```mermaid
sequenceDiagram
    actor U as User
    participant D as Device
    participant S as SmartSpeech
    participant M as Model

    U->>D: Open SmartSpeech app
    activate D
    D->>S: Start instance
    activate S
    S-->>D: Display Home
    
    loop while drawing
        U->>D: Draws
        D->>S: Sends drawing
        S->>+M: Sends drawing
        M->>M: Recognize drawing
        M-->>-S: Suggest object
        S-->>D: Display suggestions
    end

    
    U->>D: Presses suggestion
    D->>S: Sends tile request
    S-->>D: Return tile request    
    D-->>U: Speaks word

    deactivate D
    deactivate S
```
```
This sequence diagram details the process of a user drawing what they want to speak and then SmartSpeech recognizing and speaking the word through the device. This is the main functionality of SmartSpeech.

1. User opens the app on their device
2. User draws a picture of what they want to say on the drawing pad
3. User is prompted with a list of suggestions describing their drawing
5. Drawing is correctly recognized, so User taps the corresponding tile on the screen
6. Word is spoken using the speaker on the device
```


## Use Case 2: *Image Drawing* - Edit Drawing
**User wants to draw a picture to help them communicate, but then changes their drawing after they come up with a different way to draw it.**

```mermaid
sequenceDiagram
    actor U as User
    participant D as Device
    participant S as SmartSpeech
    participant M as Model

    U->>D: Open SmartSpeech app
    activate D
    D->>S: Start instance
    activate S
    S-->>D: Display Home
    
    loop while drawing
        U->>D: Draws
        D->>S: Sends drawing
        S->>+M: Sends drawing
        M->>M: Recognize drawing
        M-->>-S: Suggest object
        S-->>D: Display suggestions
    end

    U->>D: Presses clear canvas
    D->>S: Sends clear canvas request
    S-->>D: Displays clear canvas


    loop while drawing
        U->>D: Draws
        D->>S: Sends drawing
        S->>+M: Sends drawing
        M->>M: Recognize drawing
        M-->>-S: Suggest object
        S-->>D: Display suggestions
    end

    
    U->>D: Presses suggestion
    D->>S: Sends tile request
    S-->>D: Return tile request    
    D-->>U: Speaks word

    deactivate D
    deactivate S
```
```
This sequence diagram details the process of clearing the drawing pad when the word the user wants to speak is either not recognized or they want to portray it in a different way. This showcases the clear drawing pad function.

1. User opens the app on their device
2. User begins to draw a picture of what they want to say on the drawing pad
3. User clicks the clear canvas button to redraw the picture
4. User redraws the picture
5. User is prompted with a list of suggestions describing their drawing
6. Drawing is correctly recognized, so User taps the corresponding tile on the screen
7. Word is spoken using the speaker on the device
```


## Use Case 3: *AAC Board* - Add Custom Tiles
**User wants to add custom tile to their tile board.**

```mermaid
sequenceDiagram
    actor U as User
    participant D as Device
    participant S as SmartSpeech

    U->>D: Open SmartSpeech app
    activate D
    D->>S: Start instance
    activate S
    S-->>D: Display Home
    U->>D: Presses login button
    D->>S: Requests login menu
    S-->>D: Displays login menu
   
    U->>D: Enters username
    D->>S: Sends username
    U->>D: Enters password
    D->>S: Sends password
    S-->>S: Verifies credentials and logs user in
    S-->>D: Displays home

     U->>D: Presses tile board button
    D->>S: Requests tile board
    S-->>D: Display tile board

    U->>D: Selectes create tile
    D->>S: Requests custom tile creation UI
    S-->>D: Displays UI

    U->>D: Enters a drawing or picture
    D->>S: Sends drawing or picture
    U->>D: Enters voice recording
    D->>S: Sends voice recording
    S-->>S: Saves data
    S-->>D: Displays home
    

    deactivate D
    deactivate S
```
```
This sequence diagram details the process of adding a custom tile to a user's SmartSpeech account. Custom tiles are helpful in increasing the efficacy of AAC solutions.

1. User opens the app on their device
2. User logs in to their account
3. User presses the tile board button on the main screen
4. User presses the create custom tile button
5. User enters a drawing or picture to be displayed on the tile
6. User enters a voice recording to go with the tile
7. User presses the save button to save their new custom tile
```
 

## Use Case 4: *AAC Board* - Use Tile Board
**User knows where to locate their word on the tile board, so they switch to that page.**

```mermaid
sequenceDiagram
    actor U as User
    participant D as Device
    participant S as SmartSpeech

    U->>D: Open SmartSpeech app
    activate D
    D->>S: Start instance
    activate S
    S-->>D: Display Home
    
    U->>D: Presses tile board button
    D->>S: Requests tile board
    S-->>D: Display tile board

    U->>D: Selectes tile category
    D->>S: requests tile subcategory
    S-->>U: Displays subcategory
    

    
    U->>D: Presses tile
    D->>S: Sends tile request
    S-->>D: Return tile request    
    D-->>U: Speaks word

    deactivate D
    deactivate S
```
```
This sequence diagram details the process of a user searching through the tile board in order to find the word they want to speak. This function is designed as a back up to the drawing pad.

1. User presses the tile board button on the main screen
2. User taps the category their word belongs to 
3. User taps the tile corresponding to their word on the screen
4. Word is spoken using the speaker on the device
```


## Use Case 5: *Image Recognition & Drawing* - Draw Rather Than Using Tiles
**User does not know where to locate their word on the tile board, so they draw it instead.**

```mermaid
sequenceDiagram
    actor U as User
    participant D as Device
    participant S as SmartSpeech
    participant M as Model

    U->>D: Open SmartSpeech app
    activate D
    D->>S: Start instance
    activate S
    S-->>D: Display Home
    U->>D: Presses login button
    D->>S: Requests login menu
    S-->>D: Displays login menu
   
    U->>D: Enters username
    D->>S: Sends username
    U->>D: Enters password
    D->>S: Sends password
    S-->>S: Verifies credentials and logs user in
    S-->>D: Displays home

    U->>D: Presses tile board button
    D->>S: Requests tile board
    S-->>D: Display tile board

    U->>D: Selectes tile category
    D->>S: requests tile subcategory
    S-->>D: Displays subcategory
    U->>U: unable to locate tile
    
    loop while drawing
        U->>D: Draws
        D->>S: Sends drawing
        S->>+M: Sends drawing
        M->>M: Recognize drawing
        M-->>-S: Suggest object
        S-->>D: Display suggestions
    end

    
    U->>D: Presses suggestion
    D->>S: Sends tile request
    S-->>D: Return tile request    
    D-->>U: Speaks word

    deactivate D
    deactivate S
```
```
This sequence diagram details and highlights the intuitive function of a user drawing what they want to speak on SmartSpeech instead of finding the word in the tile menues. This highlights the defining function of SmartSpeech compared to current AAC solutions that require the use of tile menues.

1. User presses tile board button on the main screen
2. User taps the category they think their word belongs to 
3. User is unable to find the word tile they want to use, so they return to the main screen
4. User draws a picture of what they want to say on the drawing pad
5. User is prompted with a list of suggestions describing their drawing
6. Drawing is correctly recognized, so User taps the corresponding tile on the screen
7. Word is spoken using the speaker on the device
```


## Use Case 6: Download App
**User wants to download the app**

```mermaid
sequenceDiagram
    actor User
    participant Device
    participant SmartSpeech

    User->>+Device: Opens SmartSpeech app in browser
    activate Device
    Device->>+SmartSpeech: Instance of SmartSpeech started
    activate SmartSpeech
    SmartSpeech-->>Device: Displays app
    User->>Device: Navigates to settings tab
    Device->>SmartSpeech: requests settings tab
    SmartSpeech-->>Device: Displays settings tab
    User->>Device: Presses install button
    Device->>SmartSpeech: requests install
    SmartSpeech-->>Device: Installs SmartSpeech (PWA)
    deactivate SmartSpeech
    User->>Device: User locally opens the app on device
    
    Device->>+SmartSpeech: Instance of SmartSpeech started
    activate SmartSpeech
    SmartSpeech-->>Device: Displays app
    deactivate SmartSpeech
    deactivate Device
```
```
This sequence diagram details how a user would download SmartSpeech to their device to have it more available when there is either poor or unavailable internet connection.

1. User opens the website on their device
2. User navigates to the settings of the app
3. User chooses the install option
4. The app is installed on the device, and the user opens the app locally by clicking the app icon
```


## Use Case 7: Account Creation
**User wants to create an account to begin creating tiles**

```mermaid
sequenceDiagram
    actor U as User
    participant D as Device
    participant S as SmartSpeech

    U->>D: Open SmartSpeech app
    activate D
    D->>S: Start instance
    activate S
    S-->>D: Display Home
    U->>D: Presses login button
    D->>S: Requests login menu
    S-->>D: Displays login menu
    U->>D: Presses create account button
    D->>S: Requests account creation menu
    S->>S: Check account does not exist
    
    S-->>D: Requests new username
    U->>D: Enters new username
    D->>S: Sends username
    S-->>D: Requests new password
    U->>D: Enters new password
    D->>S: Sends Password
    U->>D: Presses create account
    D->>S: Create accoutn and login request
    S-->>S: Creates and saves account, logs user in
    S-->>D: Display home
    

    deactivate D
    deactivate S
```
```
This sequence diagram details how a user would create an account.

1. User opens the app
2. User selects the login button
3. User selects the "create account" button
4. User enters their new username and password
5. User selects create account
6. User's account is created, and they are logged into their new account where they can create their own tiles and save configurations
```


## Use Case 8: *AAC Board* - View Custom Tiles
**User wants to login to view tiles**

```mermaid
sequenceDiagram
    actor U as User
    participant D as Device
    participant S as SmartSpeech

    U->>D: Open SmartSpeech app
    activate D
    D->>S: Start instance
    activate S
    S-->>D: Display Home
    U->>D: Presses login button
    D->>S: Requests login menu
    S-->>D: Displays login menu
   
   
    U->>D: Enters username
    D->>S: Sends username
    U->>D: Enters password
    D->>S: Sends password
    S-->>S: Verifies credentials and logs user in
    S-->>D: Displays home

    deactivate D
    deactivate S
```
```
This sequence diagram displays how a user will log in to SmartSpeech to access additional functionalities like custom tiles.

1. User opens the app
2. User selects the login button
3. User enters their password and their username
4. User selects login
5. User is logged into their account where they can create their own tiles and save configurations
```


## Use Case 9: *PWA* - Connection Lost
**User loses Wi-Fi connection during use of the app**

```mermaid
sequenceDiagram
    actor U as User
    participant D as Device
    participant S as SmartSpeech
    participant I as Internet

    U->>D: Open SmartSpeech app
    activate D
    D->>S: Start instance
    activate S
    S->>I: Connect
    activate I
    S-->>D: Display Home
    U->>D: Draws
    D->>S: Sends drawing

    I->>S: Disconnect
    deactivate I
    S->>S: Disable drawing pad
    S-->>D: Displays disconnect icon
   
   
    U->>D: Presses manual mode tile
    D->>S: Sends tile request (category)
    S-->>D: Return tile request (category)
    U->>D: Presses tile
    D->>S: Sends tile request
    S-->>D: Return tile request    
    D-->>U: Speaks word

    deactivate D
    deactivate S
```
```
This sequence diagram displays how SmartSpeech will adapt to the loss of its drawing recognition model accessed through internet connection.

1. User opens the app
2. User begins to draw what they want to say but lose connection to the internet
3. User is notified of the disconnection by an icon, and the drawing board disconnects
4. User navigates the manual tile board 
5. User taps the category their word belongs to 
6. User taps the tile corresponding to their word on the screen
7. Word is spoken using the speaker on the device
```