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

  return (
    <section className="">
      <h2 className="font-bold text-xl">Suggested Tiles</h2>
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