import React from "react";
import { useState, useEffect } from "react";
import "../dictionary.css";

const API_URL = "https://646362f34dca1a66135c58b5.mockapi.io/koreandictionary";

function Koreandictionary() {
  const [koreanWord, setKoreanWord] = useState("");
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
      setKoreanWord(translation);
    } else {
      setKoreanWord("Translation not found");
    }
  };

  return (
    <>
      <div className="top-bar">
        <h1 className="text-dark mb-3"> Learn daily use words of Korean</h1>
      </div>
      <p className="lead bg-light">
        This page having a dictionary and a translator form english to Korean
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
          <h2 className="card-title">English To Korean</h2>
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
            <p className="translation-result">{koreanWord}</p>
          </div>
        </div>
      </div>
      <footer className="bg-dark text-center text-white py-3 ">
        &copy; {new Date().getFullYear()} Language Learning. All rights
        reserved.
      </footer>
    </>
  );
}

export default Koreandictionary;