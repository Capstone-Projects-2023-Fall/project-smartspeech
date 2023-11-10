import React, { useState } from 'react';
import Tile from './Tile';
import { stackReducer } from "@/react-state-management/reducers/stackReducer";
import { TileAssets } from "./TileTypes";
import { useTilesProvider } from "@/react-state-management/providers/tileProvider";
import data from '@/data/AAC/Tiles';

interface SimilarityResponse {
    suggestions: string[];
  }
  
  const SimilarityChecker: React.FC = () => {
    const [suggestions, setSuggestions] = useState<string[]>([]);
  
    const getSimilarWords = async () => {
      try {
        // Set of words to send to the API
        const wordsToCheck = ['blueberry'];
  
        // Create a data object with the words
        const data = { words: wordsToCheck };
  
        // Make a POST request to the API
        const response = await fetch('http://localhost:8000/similarity', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        // Parse the JSON response
        const result: SimilarityResponse = await response.json();
        // Filter suggestions based on the tile data
      const filteredSuggestions = result.suggestions.filter(suggestion =>
        Object.values(data).some(tile => tile.text.toLowerCase() === suggestion.toLowerCase())
      );

      setSuggestions(filteredSuggestions);
   
      } catch (error) {
        // Handle errors during the API request
        console.error('Error:', error);
        setSuggestions(['Error fetching suggestions.']);
      }
    };
  
    return (
      <div>
        <h1>Word Similarity Checker</h1>
  
        {/* Button to trigger the API request */}
        <button type="button" onClick={getSimilarWords}>
          Get Similar Words
        </button>
  
        {/* Display the suggestions */}
        <div>
          {suggestions.length > 0 ? (
            <ul>
              {/* Display each suggestion as a list item */}
              {suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          ) : (
            <p>No suggestions found.</p>
          )}
        </div>
      </div>
    );
  };
  
  export default SimilarityChecker;