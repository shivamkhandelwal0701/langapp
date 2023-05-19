import React from "react";
import "./dashlang.css";
import "./french.css";
import { Dropdown } from "react-bootstrap";
function Chinese() {
  const user = JSON.parse(localStorage.getItem("user"));
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
      <div className="mypage">
        <div className="top-bar">
          <h1>Learn Chinese Language</h1>
        </div>

        <div className="mt-4">
          <h1 className="text-primary mb-3">Introduction to Chinese</h1>
          <p className="lead bg-light">
            Chinese is a widely spoken language with rich cultural heritage. It
            is essential for various aspects of communication, including
            business, travel, and personal interactions. Learning Chinese can
            open up new opportunities and provide insights into Chinese culture
            and society.
          </p>
        </div>

        <div className="mt-4">
          <h1 className="text-primary mb-3">Steps to Learn Chinese</h1>
          <div className="lead bg-light">
            To learn Chinese effectively, you can follow these steps:
            <ul>
              <li>Start with basic greetings and common phrases</li>
              <li>Practice pronunciation and tones</li>
              <li>Build vocabulary through flashcards or online resources</li>
              <li>Listen to Chinese audio and practice speaking</li>
              <li>Engage in conversations with native speakers</li>
              <li>Read Chinese texts and articles</li>
              <li>Watch Chinese movies and TV shows</li>
              <li>Join language exchange programs or language classes</li>
              <li>Immerse yourself in Chinese culture and traditions</li>
              <li>Stay motivated and practice regularly</li>
            </ul>
          </div>
        </div>

        <div className="mt-4">
          <h1 className="text-primary mb-3">How Communication Helps</h1>
          <p className="lead bg-light">
            Effective communication helps individuals as well as business
            organizations to be more productive, generate innovative ideas, and
            build strong relationships within internal and external teams.
          </p>
        </div>

        <div className="mt-4">
          <h1 className="text-primary mb-3">
            Chinese: The Language of Business
          </h1>
          <p className="lead bg-light">
            Chinese is increasingly important in the global business landscape.
            It is the most spoken language worldwide and is used extensively in
            international trade, negotiations, and business partnerships.
            Mastering Chinese can open up numerous career opportunities and
            enhance your business prospects.
          </p>
        </div>

        <div className="mt-4 ">
          <h1 className="text-primary mb-3">Some Important Links</h1>
          <div className="can mb-3">
            <div className="card" style={{ width: "50rem" }}>
              <div className="card-body">
                <p className="lead bg-light">
                  If you want to learn Chinese from the basics, here is a link
                  to some important daily life words and a simple translator to
                  check and remember.
                </p>
                <a href="/chinesedictionary">
                  <button type="button" className="btn btn-info fs-4 p-3">
                    Dictionary
                  </button>
                </a>
              </div>
            </div>

            <div className="card " style={{ width: "50rem" }}>
              <div className="card-body">
                <p className="lead bg-light">
                  If you want to practice Chinese through interactive quizzes
                  and games, here is a link to a Quiz game that can enhance your
                  learning experience.
                </p>

                <a href="/quizgamechinese">
                  <button type="button" className="btn btn-info fs-4 p-3">
                    Quiz game
                  </button>
                </a>
              </div>
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
export default Chinese;
