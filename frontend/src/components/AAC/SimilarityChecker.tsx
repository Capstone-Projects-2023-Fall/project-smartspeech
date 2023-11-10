import React, { useState } from 'react';

interface SimilarityResponse {
  suggestions: string[];
}

const SimilarityChecker: React.FC = () => {
  const [inputWords, setInputWords] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputWords(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      // Split the input string into an array of words
      const wordsArray = inputWords.split(/\s+/).filter(Boolean);

      // Create a data object with the words
      const data = { words: wordsArray };

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

      // Update the state with the suggestions
      setSuggestions(result.suggestions);
    } catch (error) {
      // Handle errors during the API request
      console.error('Error:', error);
      setSuggestions(['Error fetching suggestions.']);
    }
  };

  return (
    <div>
      <h1>Word Similarity Checker</h1>

      {/* Input for entering words */}
      <input type="text" value={inputWords} onChange={handleInputChange} placeholder="Enter words..." />

      {/* Button to trigger the API request */}
      <button type="button" onClick={handleButtonClick}>
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