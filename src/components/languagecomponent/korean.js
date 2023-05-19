import React from "react";
import "./dashlang.css";
import "./french.css";
function Korean() {
  return (
    <>
      <div className="mypage">
        <div className="top-bar">
          <h1>Learn Korean Language</h1>
        </div>

        <div className="mt-4">
          <h1 className="text-primary mb-3">Introduction to Korean</h1>
          <p className="lead bg-light">
            Korean is the official language of South Korea and North Korea. It
            has a unique writing system called Hangul and is spoken by millions
            of people worldwide. Learning Korean can open doors to Korean
            culture, literature, and entertainment.
          </p>
        </div>

        <div className="mt-4">
          <h1 className="text-primary mb-3">Steps to Learn Korean</h1>
          <div className="lead bg-light">
            To learn Korean effectively, you can follow these steps:
            <ul>
              <li>Start with learning the Korean alphabet, Hangul</li>
              <li>Practice pronunciation and intonation</li>
              <li>Build vocabulary through flashcards or online resources</li>
              <li>Listen to Korean music, podcasts, and watch Korean dramas</li>
              <li>Engage in conversations with native Korean speakers</li>
              <li>Read Korean texts and articles</li>
              <li>Watch Korean movies and TV shows with subtitles</li>
              <li>Join language exchange programs or language classes</li>
              <li>Immerse yourself in Korean culture and traditions</li>
              <li>Practice writing and speaking Korean regularly</li>
            </ul>
          </div>
        </div>

        <div className="mt-4">
          <h1 className="text-primary mb-3">How Communication Helps</h1>
          <p className="lead bg-light">
            Effective communication helps individuals as well as business
            organizations to connect, collaborate, and build relationships with
            Korean-speaking individuals and communities. It also provides
            opportunities for cultural exchange and personal growth.
          </p>
        </div>

        <div className="mt-4">
          <h1 className="text-primary mb-3">
            Korean: A Language for Opportunities
          </h1>
          <p className="lead bg-light">
            Korean language skills can be advantageous for various career paths.
            South Korea is known for its advancements in technology,
            entertainment, and business sectors. Proficiency in Korean can open
            up job opportunities and enable cultural understanding in a
            globalized world.
          </p>
        </div>

        <div className="mt-4">
          <h1 className="text-primary mb-3">Some Important Links</h1>
          <div className="can mb-3">
            <div className="card" style={{ width: "30rem" }}>
              <div className="card-body">
                <p className="lead bg-light">
                  If you want to learn Korean from the basics, here is a link to
                  some important daily life words and a simple translator to
                  check and remember.
                </p>
                <a href="/koreandictionary">
                  <button type="button" className="btn btn-info fs-4 p-3">
                    Dictionary
                  </button>
                </a>
              </div>
            </div>

            <div className="card " style={{ width: "30rem" }}>
              <div className="card-body">
                <p className="lead bg-light">
                  If you want to practice Korean through interactive quizzes and
                  games, here is a link to a Quiz game that can enhance your
                  learning experience.
                </p>
                <a href="/quizgamekorean">
                  <button type="button" className="btn btn-info fs-4 p-3">
                    Quiz game
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Korean;
