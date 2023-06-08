import React from "react";
import { useState, useEffect } from "react";
import "../dictionary.css";
import { Dropdown } from "react-bootstrap";
const API_URL = "https://646362f34dca1a66135c58b5.mockapi.io/chinesedictionary";

function ChineseDictionary() {
  const [chineseWord, setChineseWord] = useState("");
  const [englishTranslation, setEnglishTranslation] = useState("");
  const [dictionary, setDictionary] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));
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
      setChineseWord(translation);
    } else {
      setChineseWord("Translation not found");
    }
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <h1 className="navbar-brand m-1">Language Learning</h1>

            <div className="d-flex justify-content-end">
              <Dropdown className="drop">
                <Dropdown.Toggle
                  variant="outline-light"
                  id="dropdown-basic"
                  className="btn btn-outline-light mr-2"
                >
                  User
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>{user.name}</Dropdown.Item>
                  <Dropdown.Item href="/home">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </nav>
      </header>
      <div className="dict">
        <div className="top-bar">
          <h1 className="text-dark ">Learn daily use words of Chinese</h1>
        </div>
        <p className="lead bg-light">
          This page contains a dictionary and a translator for English to
          Chinese.
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
            <h2 className="card-title">English To Chinese</h2>
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
              <p className="translation-result">{chineseWord}</p>
            </div>
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

export default ChineseDictionary;
