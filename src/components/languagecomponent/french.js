import React from "react";
import "./dashlang.css";
import { Link } from "react-router-dom";
import "./french.css";
import { Dropdown } from "react-bootstrap";

function French() {
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
          <h1>Learn French Language</h1>
        </div>

        <div className="mt-4">
          <h1 className="text-primary mb-3">Introduction to French</h1>
          <p className="lead bg-light">
            To convey a message from one person to another, we use spoken
            French. It is a form of communication. The dialogue or conversation
            between two people or within a group is spoken French. Nowadays,
            communication in French or spoken French has become very important
            in the business world or in client relationships. To speak French
            fluently, you need to read, listen, and speak. Self-talk is very
            important if you want to speak French fluently.
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
          <h1 className="text-primary mb-3">
            French: The Language of Business
          </h1>
          <p className="lead bg-light">
            There was a time when speaking French accurately and fluently was
            considered a status symbol, but today French has become a necessity
            as it is a universal language, and around 45% of global business
            activities are conducted in French. Nowadays, due to globalization,
            all multinational companies recruit or prefer candidates who can
            communicate fluently and correctly in French.
          </p>
        </div>

        <div className="mt-4">
          <h1 className="text-primary mb-3">French Language Diversions</h1>
          <p className="lead bg-light">
            Learning French can be enjoyable and engaging. Here are some
            additional resources and diversions to enhance your French language
            learning experience:
          </p>
          <ul>
            <li>
              French Language Apps: There are many mobile apps available that
              can help you practice and learn French. Some popular options
              include Duolingo, Babbel, and Rosetta Stone.
            </li>
            <li>
              French Language Podcasts: Listening to podcasts in French can
              improve your listening skills and expose you to native speakers.
              Consider checking out podcasts like "Coffee Break French" or
              "Learn French by Podcast."
            </li>
            <li>
              French Language Books: Reading books in French, even at a beginner
              level, can help you improve your vocabulary and comprehension.
              Look for graded readers or books specifically designed for
              language learners.
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <h1 className="text-primary mb-3">Learn French Paragraphs</h1>
          <p className="lead bg-light">
            <strong>Paragraph 1:</strong> My name is Sarah, and I live in Paris.
            I love the French language and culture. Every day, I practice
            speaking French with my friends and colleagues. I also enjoy reading
            French books and watching French movies. Learning French has opened
            up a whole new world for me, and I'm excited to continue improving
            my language skills.
          </p>
          <p className="lead bg-light">
            <strong>Paragraph 2:</strong> Last summer, I visited the beautiful
            city of Lyon in France. It was an incredible experience. I had the
            opportunity to immerse myself in the French language and interact
            with the locals. I visited famous landmarks like the Basilica of
            Notre-Dame de Fourvière and tried delicious French cuisine. The trip
            motivated me to learn French even more, and I'm planning to visit
            more French-speaking countries in the future.
          </p>
          <p className="lead bg-light">
            <strong>Paragraph 3:</strong> Learning a new language can be
            challenging but rewarding. I started learning French a few months
            ago, and I've already made significant progress. I practice my
            pronunciation by listening to French songs and repeating the lyrics.
            I also use language learning apps to improve my vocabulary and
            grammar. It's amazing how much you can achieve by dedicating a
            little time each day to learning French.
          </p>
        </div>
        <div className="mt-4">
        <h1 className="text-primary mb-3">Translation of above paragraph into French</h1>
  <h1 className="text-primary mb-3">Paragraphes d'apprentissage du français</h1>
  <p className="lead bg-light">
    <strong>Paragraphe 1 :</strong> Je m'appelle Sarah et je vis à Paris. J'adore la langue française et la culture française. Chaque jour, je pratique la langue française avec mes amis et mes collègues. J'aime aussi lire des livres en français et regarder des films français. Apprendre le français m'a ouvert tout un nouvel univers et je suis enthousiaste à l'idée de continuer à améliorer mes compétences linguistiques.
  </p>
  <p className="lead bg-light">
    <strong>Paragraphe 2 :</strong> L'été dernier, j'ai visité la magnifique ville de Lyon en France. C'était une expérience incroyable. J'ai eu l'opportunité de me plonger dans la langue française et d'interagir avec les habitants. J'ai visité des monuments célèbres comme la Basilique de Notre-Dame de Fourvière et goûté à la délicieuse cuisine française. Ce voyage m'a motivé à apprendre encore plus le français et j'ai prévu de visiter d'autres pays francophones à l'avenir.
  </p>
  <p className="lead bg-light">
    <strong>Paragraphe 3 :</strong> Apprendre une nouvelle langue peut être un défi mais aussi très gratifiant. J'ai commencé à apprendre le français il y a quelques mois et j'ai déjà réalisé des progrès significatifs. Je travaille ma prononciation en écoutant des chansons françaises et en répétant les paroles. J'utilise également des applications d'apprentissage des langues pour améliorer mon vocabulaire et ma grammaire. Il est étonnant de voir à quel point on peut accomplir en consacrant un peu de temps chaque jour à l'apprentissage du français.
  </p>
</div>

        <h1 className="text-primary mb-3">Some Important Links Given Below:</h1>
        <div className="can mb-3">
          <div className="card" style={{ width: "50rem" }}>
            <div className="card-body">
              <p className="lead bg-light">
                If you want to learn French from the basics, here is a link to
                some important daily life words and a simple translator to check
                and remember.
              </p>
              <Link to="/frenchdictionary">
                <button type="button" className="btn btn-info fs-4 p-3">
                  Dictionary
                </button>
              </Link>
            </div>
          </div>

          <div className="card " style={{ width: "50rem" }}>
            <div className="card-body">
              <p className="lead bg-light">
                If you want to learn French like a game and enjoyment, here is
                the link for a Quiz game that can enhance your learning.
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
      <footer className="bg-dark text-center text-white py-3">
        &copy; {new Date().getFullYear()} Language Learning. All rights
        reserved.
      </footer>
    </>
  );
}

export default French;
