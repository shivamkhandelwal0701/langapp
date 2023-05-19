import React from "react";
import "./dashlang.css";
import { Link } from "react-router-dom";
import "./french.css";
function French() {
  return (
    <>
    <div className="mypage">
      <div className="top-bar">
        <h1>Learn french Language</h1>
      </div>

      <div className="mt-4">
        <h1 className="text-primary mb-3">Introduction to French</h1>
        <p className="lead bg-light">
          To convey a message from one person to another, we use spoken French.
          It is a form of communication. The dialogue or conversation between
          two people or within a group is spoken French. Nowadays, communication
          in French or spoken French has become very important in the business
          world or in client relationships. To speak French fluently, you need
          to read, listen, and speak. Self-talk is very important if you want to
          speak French fluently.
        </p>
      </div>

      <div className="mt-4">
        <h1 className="text-primary mb-3">Steps to Speak French Fluently</h1>
        <div className="lead bg-light">
          To speak French fluently, you need to follow the following steps:
          <ul>
            <li>Speak a little French every day</li>
            <li>Practice thinking in French</li>
            <li>Don't be afraid to make mistakes</li>
            <li>
              Read newspapers in French, watch French movies with subtitles,
              listen to French songs
            </li>
            <li>Talk to yourself out loud</li>
            <li>Listen to French phrases and repeat them</li>
            <li>Memorize as many French phrases as possible</li>
            <li>Improve your French pronunciation</li>
            <li>Use what you have learned immediately</li>
            <li>Stay motivated</li>
            <li>Keep a journal in French</li>
            <li>Practice speaking daily</li>
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
        <h1 className="text-primary mb-3">French: The Language of Business</h1>
        <p className="lead bg-light">
          There was a time when speaking French accurately and fluently was
          considered a status symbol, but today French has become a necessity as
          it is a universal language, and around 45% of global business
          activities are conducted in French. Nowadays, due to globalization,
          all multinational companies recruit or prefer candidates who can
          communicate fluently and correctly in French.
        </p>
      </div>
      <h1 className="text-primary mb-3">Some Important Links given below:</h1>
      <div className='can mb-3'>
      <div className="card" style={{ width: "30rem" }}>
        <div className="card-body">
          <p className="lead bg-light">
            If you want to learn French from the basics, here is a link to some
            important daily life words and a simple translator to check and
            remember.
          </p>
          <Link to="/frenchdictionary">
            <button type="button" className="btn btn-info fs-4 p-3">
              Dictionary
            </button>
          </Link>
        </div>
      </div>
      
      <div className="card " style={{ width: "30rem" }}>
        <div className="card-body">
          <p className="lead bg-light">
            If you want to learn French like a game and enjoyment then here is
            the link for a Quiz game and it enhance your learning.
          </p>
          <Link to="/quizgamefrench">
            <button type="button" className="btn btn-info fs-4 p-3">
              Quiz game
            </button>
          </Link>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}
export default French;
