import React, { useState } from "react";
import Tile from "./Tile";
import { useSuggestedTilesContext } from "@/react-state-management/providers/SuggestedTilesProvider";

export async function getSimilarWords(wordsArray: string[]): Promise<string[]> {
  // Create a data object with the words
  const data = { words: wordsArray };

  // Make a POST request to the similarity backend
  const url = process.env.NEXT_PUBLIC_PROG_MODE === 'PROD' ? process.env.NEXT_PUBLIC_BACKEND_URL_PROD : process.env.NEXT_PUBLIC_BACKEND_URL_DEV;
  const response = await fetch(url + '/similarity', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  // Parse the JSON response
  const result = await response.json();

  // Get the five most suggested tiles including the input word
  const topFiveSuggestions = [...wordsArray, ...result.suggestions.slice(0, 4)];
  return topFiveSuggestions;
}

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

      const topFiveSuggestions = await getSimilarWords(wordsArray);

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
      {/* Display the suggested tiles based on the context */}
      <div className="grid grid-cols-6 gap-6" data-testid="tiles-container">
      {tiles.map((item, i) => {
        const { image, text, sound, tileColor } = item;
        return <Tile image={image} text={text} sound={sound} tileColor={tileColor} key={`${item.text}-${i}`} />;
      })}
      </div>
    </section>
  );
}