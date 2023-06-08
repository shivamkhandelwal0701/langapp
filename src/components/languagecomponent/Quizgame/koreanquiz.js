import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
const KoreanQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const user = JSON.parse(localStorage.getItem("user"));
  const questions = [
    {
      questionText: "Translate 'hello' to Korean?",
      answerOptions: [
        {
          answerText: "안녕하세요",
          isCorrect: true,
          koreanTranslation: "Hello",
        },
        { answerText: "안녕", isCorrect: false, koreanTranslation: "Hi" },
        { answerText: "잘 가", isCorrect: false, koreanTranslation: "Goodbye" },
        {
          answerText: "감사합니다",
          isCorrect: false,
          koreanTranslation: "Thank you",
        },
      ],
    },
    {
      questionText: "Translate 'goodbye' to Korean?",
      answerOptions: [
        {
          answerText: "안녕하세요",
          isCorrect: false,
          koreanTranslation: "Hello",
        },
        { answerText: "안녕", isCorrect: false, koreanTranslation: "Hi" },
        { answerText: "잘 가", isCorrect: true, koreanTranslation: "Goodbye" },
        {
          answerText: "감사합니다",
          isCorrect: false,
          koreanTranslation: "Thank you",
        },
      ],
    },
    {
      questionText: "What does '감사합니다' mean in English?",
      answerOptions: [
        {
          answerText: "Hello",
          isCorrect: false,
          koreanTranslation: "안녕하세요",
        },
        {
          answerText: "Thank you",
          isCorrect: true,
          koreanTranslation: "감사합니다",
        },
        { answerText: "Goodbye", isCorrect: false, koreanTranslation: "잘 가" },
        {
          answerText: "Sorry",
          isCorrect: false,
          koreanTranslation: "미안합니다",
        },
      ],
    },
    {
      questionText: "Translate 'yes' to Korean?",
      answerOptions: [
        { answerText: "네", isCorrect: true, koreanTranslation: "Yes" },
        { answerText: "아니오", isCorrect: false, koreanTranslation: "No" },
        {
          answerText: "잘 모르겠어요",
          isCorrect: false,
          koreanTranslation: "I don't know",
        },
        {
          answerText: "미안합니다",
          isCorrect: false,
          koreanTranslation: "Sorry",
        },
      ],
    },
    {
      questionText: "What does '고맙습니다' mean in English?",
      answerOptions: [
        {
          answerText: "Hello",
          isCorrect: false,
          koreanTranslation: "안녕하세요",
        },
        {
          answerText: "Thank you",
          isCorrect: true,
          koreanTranslation: "고맙습니다",
        },
        { answerText: "Goodbye", isCorrect: false, koreanTranslation: "잘 가" },
        {
          answerText: "Sorry",
          isCorrect: false,
          koreanTranslation: "미안합니다",
        },
      ],
    },
    {
      questionText: "Translate 'sorry' to Korean?",
      answerOptions: [
        {
          answerText: "미안합니다",
          isCorrect: true,
          koreanTranslation: "Sorry",
        },
        {
          answerText: "감사합니다",
          isCorrect: false,
          koreanTranslation: "Thank you",
        },
        {
          answerText: "고맙습니다",
          isCorrect: false,
          koreanTranslation: "Thank you",
        },
        {
          answerText: "안녕하세요",
          isCorrect: false,
          koreanTranslation: "Hello",
        },
      ],
    },
    {
      questionText: "What does '네' mean in English?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true, koreanTranslation: "네" },
        { answerText: "No", isCorrect: false, koreanTranslation: "아니오" },
        {
          answerText: "Hello",
          isCorrect: false,
          koreanTranslation: "안녕하세요",
        },
        {
          answerText: "Thank you",
          isCorrect: false,
          koreanTranslation: "감사합니다",
        },
      ],
    },
    {
      questionText: "Translate 'please' to Korean?",
      answerOptions: [
        { answerText: "네", isCorrect: false, koreanTranslation: "Yes" },
        { answerText: "아니오", isCorrect: false, koreanTranslation: "No" },
        { answerText: "제발", isCorrect: true, koreanTranslation: "Please" },
        {
          answerText: "미안합니다",
          isCorrect: false,
          koreanTranslation: "Sorry",
        },
      ],
    },
    {
      questionText: "What does '아니오' mean in English?",
      answerOptions: [
        { answerText: "Yes", isCorrect: false, koreanTranslation: "네" },
        { answerText: "No", isCorrect: true, koreanTranslation: "아니오" },
        {
          answerText: "Hello",
          isCorrect: false,
          koreanTranslation: "안녕하세요",
        },
        {
          answerText: "Thank you",
          isCorrect: false,
          koreanTranslation: "감사합니다",
        },
      ],
    },
    {
      questionText: "Translate 'thank you' to Korean?",
      answerOptions: [
        {
          answerText: "미안합니다",
          isCorrect: false,
          koreanTranslation: "Sorry",
        },
        {
          answerText: "고맙습니다",
          isCorrect: true,
          koreanTranslation: "Thank you",
        },
        { answerText: "제발", isCorrect: false, koreanTranslation: "Please" },
        { answerText: "네", isCorrect: false, koreanTranslation: "Yes" },
      ],
    },
  ];

  // Add more questions and answers as needed

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  const renderResult = () => {
    const passScore = Math.floor(questions.length / 2);
    const isPass = score >= passScore;

    return (
      <>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <h1 className="navbar-brand m-1">Korean Quiz</h1>
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
        <div className=" xyz d-flex justify-content-center align-items-center h-100">
          <div className="col-5 card border-primary">
            <div className="card-body text-center">
              <h2 className="card-title">Korean Quiz</h2>
              <div className="result">
                <h2>Quiz Completed</h2>
                <p>Completed Questions: {questions.length}</p>
                <p>Total Score: {score}</p>
                <p>Result: {isPass ? "Pass" : "Fail"}</p>
                <button
                  className="btn btn-primary btn-block mt-3"
                  onClick={handleRestartQuiz}
                >
                  Restart Quiz
                </button>
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
  };

  return (
    <>
      {showScore ? (
        renderResult()
      ) : (
        <>
          <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                <h1 className="navbar-brand m-1">Korean Quiz</h1>
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
          <div className="xyz d-flex justify-content-center align-items-center h-100">
            <div className="col-5 card border-primary">
              <div className="card-body text-center">
                <h2 className="card-title">Korean Quiz</h2>
                <div className="question-section">
                  <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>/
                    {questions.length}
                  </div>
                  <div className="question-text">
                    {questions[currentQuestion].questionText}
                  </div>
                  <div className="answer-options">
                    {questions[currentQuestion].answerOptions.map(
                      (answerOption, index) => (
                        <button
                          key={index}
                          className="btn btn-primary btn-block mt-3"
                          onClick={() =>
                            handleAnswerOptionClick(answerOption.isCorrect)
                          }
                        >
                          {answerOption.answerText}
                        </button>
                      )
                    )}
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
      )}
    </>
  );
};

export default KoreanQuiz;
