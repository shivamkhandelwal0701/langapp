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
        <div className="mt-4">
  <h1 className="text-primary mb-3">Chinese Language Diversions</h1>
  <p className="lead bg-light">
    Learning Chinese can be enjoyable and engaging. Here are some additional resources and diversions to enhance your Chinese language learning experience:
  </p>
  <ul>
    <li>
      Chinese Language Apps: There are many mobile apps available that can help you practice and learn Chinese. Some popular options include HelloChinese, Pleco, and Skritter.
    </li>
    <li>
      Chinese Language Movies: Watching Chinese movies can improve your listening and comprehension skills. Consider checking out popular films like "Crouching Tiger, Hidden Dragon" or "Raise the Red Lantern."
    </li>
    <li>
      Chinese Language Language Exchange: Finding a language exchange partner can provide you with opportunities to practice speaking and interacting in Chinese. Websites like Tandem and HelloTalk can help you connect with language learners.
    </li>
  </ul>
</div>
<div className="mt-4">

  <h1 className="text-primary mb-3">Learn Chinese Paragraphs</h1>
  <p className="lead bg-light">
    <strong>Paragraph 1:</strong> Chinese is a fascinating language with a rich history and cultural heritage. From Mandarin to Cantonese, learning Chinese opens doors to understanding one of the world's oldest and most influential civilizations. As I embark on this language learning journey, I'm excited to explore the complexities of Chinese characters and the nuances of tonal pronunciation.
  </p>
  <p className="lead bg-light">
    <strong>Paragraph 2:</strong> Immersion is essential when learning Chinese. I immerse myself in the language by watching Chinese movies, TV shows, and listening to Chinese music. Additionally, practicing conversations with native Chinese speakers helps me improve my language skills and gain a deeper understanding of the Chinese way of life.
  </p>
  <p className="lead bg-light">
    <strong>Paragraph 3:</strong> Learning Chinese provides countless opportunities. China's booming economy and global influence make it a desirable language for business and trade. Moreover, exploring the rich Chinese literature, engaging with Chinese traditions, and forming connections with the global Chinese community are just some of the rewards of mastering this beautiful language.
  </p>
</div>

<div className="mt-4">
<h1 className="text-primary mb-3">Translation of above paragraph in chinese</h1>
  <h1 className="text-primary mb-3">中文学习段落</h1>
  <p className="lead bg-light">
    <strong>段落 1:</strong> 汉语学习是一段充满趣味的旅程。我一直对中国丰富的文化和历史深感着迷，学习这门语言让我能更深入地探索这个美妙的世界。从掌握汉字到理解语法的细微差别，每一步都使我更接近流利地使用汉语。
  </p>
  <p className="lead bg-light">
    <strong>段落 2:</strong> 沉浸式学习对于学习任何语言都至关重要，汉语也不例外。我尝试通过观看中国电影、电视剧，听汉语音乐，与母语为中文的人交流，将汉语融入我的日常生活。这些经历不仅提高了我的语言技能，还让我更深刻地理解了中国文化。
  </p>
  <p className="lead bg-light">
    <strong>段落 3:</strong> 学习汉语带来无数机会。中国蓬勃发展的经济和全球影响力使其成为商业和贸易领域中令人向往的语言。此外，探索丰富的中国文学，与中国传统互动，与全球华人社群建立联系，这些都是掌握这门美丽语言的回报之一。
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
