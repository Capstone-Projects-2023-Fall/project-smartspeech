import React, { useState } from "react";
import Tile from "./Tile";
import { useSuggestedTilesContext } from "@/react-state-management/providers/SuggestedTilesProvider";

/**
 * @returns Component that fetches suggested tiles based on user input and displays them
 */
export default function SuggestedTiles() {
  const { tiles } = useSuggestedTilesContext();
  const [inputWords, setInputWords] = useState<string>('');
  const [suggestedTiles, setSuggestedTiles] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputWords(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      // Split the input string into an array of words
      const wordsArray = inputWords.split(/\s+/).filter(Boolean);

      // Create a data object with the words
      const data = { words: wordsArray };

      // Make a POST request to the similarity backend
      const response = await fetch('http://localhost:8000/similarity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Parse the JSON response
      const result = await response.json();

      // Get the five most suggested tiles including the input word
      const topFiveSuggestions = [inputWords, ...result.suggestions.slice(0, 4)];

      // Update the state with the suggested tiles
      setSuggestedTiles(topFiveSuggestions);
    } catch (error) {
      // Handle errors during the API request
      console.error('Error:', error);
      setSuggestedTiles(['Error fetching suggestions.']);
    }
  };

  return (
    <section className="">
      <h1 className="tilesHeaderFont">Suggested Tiles</h1>
      <div className="flex flex-cols-8 gap-6" data-testid="tiles-container">
        {/* Input for entering words */}
        <input type="text" value={inputWords} onChange={handleInputChange} placeholder="Enter words..." />

        {/* Button to trigger the API request */}
        <button type="button" onClick={handleButtonClick}>
          Get Similar Words
        </button>

        {/* Display the suggested tiles */}
        {suggestedTiles.length > 0 ? (
          <ul>
            {/* Display each suggested tile as a list item */}
            {suggestedTiles.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        ) : (
          <p>No suggestions found.</p>
        )}
      </div>

      {/* Display the suggested tiles based on the context */}
      {tiles.map((item, i) => {
        const { image, text, sound, tileColor } = item;
        return <Tile image={image} text={text} sound={sound} tileColor={tileColor} key={`${item.text}-${i}`} />;
      })}
    </section>
  );
}