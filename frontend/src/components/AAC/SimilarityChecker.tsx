import React, { useState } from 'react';

interface SimilarityResponse {
  suggestions: string[];
}

interface SimilarityFormData {
  words: string;
}

const SimilarityChecker: React.FC = () => {
  const [inputWords, setInputWords] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputWords(event.target.value);
  };

  const getSimilarWords = async () => {
    try {
      // Convert the input string to a list of words
      const wordsList = inputWords.split(',').map((word) => word.trim());

      // Create a data object with the words
      const data: SimilarityFormData = { words: wordsList.join(',') };

      // Make a POST request to the API
      const response = await fetch('http://localhost:8000/similarity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      //Parse the JSON response
      const result: SimilarityResponse = await response.json();
      setSuggestions(result.suggestions);
    } catch (error) {
      console.error('Error:', error);
      setSuggestions(['Error fetching suggestions.']);
    }
  };

  return (
    <div>
      <h1>Word Similarity Checker</h1>
      <label htmlFor="wordInput">Enter words (comma-separated):</label>
      <input
        type="text"
        id="wordInput"
        value={inputWords}
        onChange={handleInputChange}
        required
      />
      <button type="button" onClick={getSimilarWords}>
        Get Similar Words
      </button>

      <div>
        {suggestions.length > 0 ? (
          <ul>
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