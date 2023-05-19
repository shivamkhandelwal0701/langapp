import React from "react";
import { useState, useEffect } from "react";
import "../dictionary.css";

const API_URL = "https://6458ac648badff578ef75ea8.mockapi.io/dictionary";

function FrenchDictionary() {
  const [frenchWord, setFrenchWord] = useState("");
  const [englishTranslation, setEnglishTranslation] = useState("");
  const [dictionary, setDictionary] = useState({});

  useEffect(() => {
    fetchDictionary();
  }, []);

  const fetchDictionary = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const dictionaryData = data[0]; // Assuming the dictionary object is the first item in the array
        setDictionary(dictionaryData);
      })
      .catch((error) => {
        console.error("Dictionary fetch error:", error);
      });
  };

  const handleTranslation = () => {
    const translation = dictionary[englishTranslation.toLowerCase()]; // Lookup the translation in the dictionary
    if (translation) {
      setFrenchWord(translation);
    } else {
      setFrenchWord("Translation not found");
    }
  };

  return (
    <>
      <div className="top-bar">
        <h1 className="text-dark mb-3"> Learn daily use words of french</h1>
      </div>
      <p className="lead bg-light">
        This page contains a dictionary and a translator for english to french.
      </p>

      <div className="container row mx-auto mt-5">
        <div className="card col-6 dictionary-container">
          <h2 className="card-title">Dictionary:</h2>
          <div className="scrollable-container">
            {Object.entries(dictionary).map(([word, translation]) => (
              <div key={word} className="translation-item">
                <strong>{word}:</strong> {translation}
              </div>
            ))}
          </div>
        </div>
        <div className="card col 6 app-container">
          <h2 className="card-title">English To French</h2>
          <div className="input-container mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter an English word"
              value={englishTranslation}
              onChange={(e) => setEnglishTranslation(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleTranslation}>
              Translate
            </button>
          </div>
          <div className="translation-container mt-3">
            <h2 className="card-title">Translation:</h2>
            <p className="translation-result">{frenchWord}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrenchDictionary;
