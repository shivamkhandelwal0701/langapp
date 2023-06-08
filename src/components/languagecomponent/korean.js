import React from "react";
import "./dashlang.css";
import "./french.css";
import { Dropdown } from "react-bootstrap";
function Korean() {
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
  <h1 className="text-primary mb-3">Korean Language Diversions</h1>
  <p className="lead bg-light">
    Learning Korean can be enjoyable and engaging. Here are some additional resources and diversions to enhance your Korean language learning experience:
  </p>
  <ul>
    <li>
      Korean Language Apps: There are many mobile apps available that can help you practice and learn Korean. Some popular options include Memrise, LingoDeer, and HelloTalk.
    </li>
    <li>
      Korean Language Dramas: Watching Korean dramas can improve your listening and comprehension skills. Consider checking out popular dramas like "Crash Landing on You" or "Itaewon Class."
    </li>
    <li>
      Korean Language Language Exchange: Finding a language exchange partner can provide you with opportunities to practice speaking and interacting in Korean. Websites like ConversationExchange.com can help you connect with language learners.
    </li>
  </ul>
</div>

<div className="mt-4">
  <h1 className="text-primary mb-3">Learn Korean Paragraphs</h1>
  <p className="lead bg-light">
    <strong>Paragraph 1:</strong> Learning Korean is an exciting journey. I have always been fascinated by the rich culture and history of Korea, and learning the language allows me to delve deeper into this amazing world. From mastering the unique writing system of Hangul to understanding the nuances of Korean grammar, every step brings me closer to fluency.
  </p>
  <p className="lead bg-light">
    <strong>Paragraph 2:</strong> Immersion is key to learning any language, and Korean is no exception. I try to incorporate Korean into my daily life by watching Korean dramas and movies, listening to K-pop music, and engaging in conversations with native Korean speakers. These experiences not only improve my language skills but also give me a deeper appreciation for Korean culture.
  </p>
  <p className="lead bg-light">
    <strong>Paragraph 3:</strong> Learning Korean opens up a world of opportunities. Whether it's traveling to Korea and exploring its breathtaking landscapes, connecting with Korean friends and colleagues, or even pursuing career prospects in Korean companies, the language provides a gateway to a whole new realm of personal and professional growth.
  </p>
</div>
<div className="mt-4">
<h1 className="text-primary mb-3">Translation for above paragraph in korean</h1>
  <h1 className="text-primary mb-3">한국어 배우기 단락</h1>
  <p className="lead bg-light">
    <strong>단락 1:</strong> 한국어 학습은 흥미로운 여정입니다. 나는 항상 한국의 풍부한 문화와 역사에 매료되어왔으며, 이 언어를 배우는 것은 이 놀라운 세계에 더 깊이 몰입할 수 있게 해줍니다. 한글이라는 독특한 문자체계를 익히고 한국어 문법의 뉘앙스를 이해하는 과정은 나를 유창성으로 이끌어줍니다.
  </p>
  <p className="lead bg-light">
    <strong>단락 2:</strong> 언어 습득에 있어서는 몰입이 중요한데, 한국어도 마찬가지입니다. 한국 드라마와 영화를 시청하고 K-pop 음악을 듣는 등 일상 생활에 한국어를 통합시킵니다. 이러한 경험들은 언어 능력을 향상시키는데 도움을 주며, 한국 문화에 대한 깊은 이해도 선사합니다.
  </p>
  <p className="lead bg-light">
    <strong>단락 3:</strong> 한국어 학습은 다양한 기회를 열어줍니다. 대한민국을 여행하여 아름다운 풍경을 탐험하거나 한국인 친구와 동료들과 교류하며, 심지어는 한국 기업에서의 직업 기회를 모색하는 등 언어를 통해 개인적인 성장과 직업적인 발전의 문을 열어줍니다.
  </p>
</div>

        <div className="mt-4">
          <h1 className="text-primary mb-3">Some Important Links</h1>
          <div className="can mb-3">
            <div className="card" style={{ width: "50rem" }}>
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

            <div className="card " style={{ width: "50rem" }}>
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
      <footer className="bg-dark text-center text-white py-3 ">
        &copy; {new Date().getFullYear()} Language Learning. All rights
        reserved.
      </footer>
    </>
  );
}
export default Korean;
