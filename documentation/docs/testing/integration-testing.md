---
sidebar_position: 2
---

# Integration tests

On the frontend, we will utilize Jest to perform integration tests. We will mock out the backend endpoints, assuming that our backend is tested sufficiently, to confirm that the UI as a whole will work as expected.

Many of these tasks require that the word is spoken aloud, but audio cannot be easily tested automatically, so we leave that to acceptance testing.

## Use Case 1: _Drawing Recognition_ - Drawing is Recognized

1. Simulate a drawing of a t-shirt on the canvas
2. Submit drawing to a mocked endpoint that returns 5 guesses
3. Ensure that Tiles for each of the 5 guesses is visible on the screen and can be tapped

## Use Case 2: Image Drawing - Edit Drawing

1. Simulate a drawing of a t-shirt on the canvas
2. Click clear canvas and ensure it is cleared
3. Simulate a drawing of pants on the canvas
4. Submit drawing to a mocked endpoint that returns 5 guesses
5. Ensure that Tiles for each of the 5 guesses is visible on the screen and can be tapped

## Use Case 3: AAC Board - Add Custom Tiles​

1. Enter the login details for a fake account and have the mocked login endpoint return successful
2. Navigate to the tile board on the main screen
3. Press the create custom tile button
4. Simulate a drawing on the canvas
5. Simulate a voice recording
6. Press save and confirm the correct data is sent to the backend
7. Navigate to the tile board on the main screen
8. Press the create custom tile button
9. Submit a picture
10. Simulate a voice recording
11. Press save and confirm the correct data is sent to the backend

## Use Case 4: AAC Board - Use Tile Board

1. Click the manual button to open the AAC board
2. Tap a word category
3. Tap a word in that category

## Use Case 5: Image Recognition & Drawing - Draw Rather Than Using Tiles

1. Click the manual button to open the AAC board
2. Tap a word category
3. Return to home page
4. Simulate a drawing of a t-shirt on the canvas
5. Submit drawing to a mocked endpoint that returns 5 guesses
6. Ensure that Tiles for each of the 5 guesses is visible on the screen and can be tapped

## Use Case 6: Download App

Refer to acceptance testing.

## Use Case 7: Account Creation

1. Tap to create an account
2. Enter details for a fake account and the mocked endpoint login returns successful
3. Ensure that user is logged into fake account

## Use Case 8: AAC Board - View Custom Tiles

1. Enter the login details for a fake account and have the mocked login endpoint return successful
2. Click the manual button to open the AAC board
3. Have the backend endpoint return a fake custom tile
4. Ensure that the custom tile can be tapped on the tile board

## Use Case 9: PWA - Connection Lost​

1. Simulate a drawing of a t-shirt on the canvas
2. Submit drawing to a mocked endpoint that returns an error simulating network loss
3. Ensure that the user is alerted that there is no internet
   Without calling any endpoint ensure the user can:
4. Click the manual button to open the AAC board
5. Tap a word category
6. Tap a word in that category

## Use Case 10: Camera Recognition

1. Simulate a picture taken with an existing image
2. Submit picture to a mocked endpoint that returns 5 guesses
3. Ensure that Tiles for each of the 5 guesses is visible on the screen and can be tapped
