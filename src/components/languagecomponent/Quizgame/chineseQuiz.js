import React, { useState } from "react";
import "./Quiz.css";
const ChineseQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const questions = [
    {
      questionText: "Translate 'hello' to Chinese?",
      answerOptions: [
        { answerText: "你好", isCorrect: true, chineseTranslation: "Hello" },
        { answerText: "再见", isCorrect: false, chineseTranslation: "Goodbye" },
        {
          answerText: "谢谢",
          isCorrect: false,
          chineseTranslation: "Thank you",
        },
        { answerText: "对不起", isCorrect: false, chineseTranslation: "Sorry" },
      ],
    },
    {
      questionText: "Translate 'goodbye' to Chinese?",
      answerOptions: [
        { answerText: "你好", isCorrect: false, chineseTranslation: "Hello" },
        { answerText: "再见", isCorrect: true, chineseTranslation: "Goodbye" },
        {
          answerText: "谢谢",
          isCorrect: false,
          chineseTranslation: "Thank you",
        },
        { answerText: "对不起", isCorrect: false, chineseTranslation: "Sorry" },
      ],
    },
    {
      questionText: "What does '谢谢' mean in English?",
      answerOptions: [
        { answerText: "Hello", isCorrect: false, chineseTranslation: "你好" },
        {
          answerText: "Thank you",
          isCorrect: true,
          chineseTranslation: "谢谢",
        },
        { answerText: "Goodbye", isCorrect: false, chineseTranslation: "再见" },
        { answerText: "Sorry", isCorrect: false, chineseTranslation: "对不起" },
      ],
    },
    {
      questionText: "Translate 'yes' to Chinese?",
      answerOptions: [
        { answerText: "是的", isCorrect: true, chineseTranslation: "Yes" },
        { answerText: "不是", isCorrect: false, chineseTranslation: "No" },
        { answerText: "可能", isCorrect: false, chineseTranslation: "Maybe" },
        {
          answerText: "请问",
          isCorrect: false,
          chineseTranslation: "Excuse me",
        },
      ],
    },
    {
      questionText: "What does '谢谢你' mean in English?",
      answerOptions: [
        { answerText: "Hello", isCorrect: false, chineseTranslation: "你好" },
        {
          answerText: "Thank you",
          isCorrect: true,
          chineseTranslation: "谢谢你",
        },
        { answerText: "Goodbye", isCorrect: false, chineseTranslation: "再见" },
        { answerText: "Sorry", isCorrect: false, chineseTranslation: "对不起" },
      ],
    },
    {
      questionText: "Translate 'sorry' to Chinese?",
      answerOptions: [
        { answerText: "对不起", isCorrect: true, chineseTranslation: "Sorry" },
        {
          answerText: "谢谢",
          isCorrect: false,
          chineseTranslation: "Thank you",
        },
        {
          answerText: "请问",
          isCorrect: false,
          chineseTranslation: "Excuse me",
        },
        { answerText: "再见", isCorrect: false, chineseTranslation: "Goodbye" },
      ],
    },
    {
      questionText: "What does '是的' mean in English?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true, chineseTranslation: "是的" },
        { answerText: "No", isCorrect: false, chineseTranslation: "不是" },
        { answerText: "Hello", isCorrect: false, chineseTranslation: "你好" },
        {
          answerText: "Thank you",
          isCorrect: false,
          chineseTranslation: "谢谢",
        },
      ],
    },
    {
      questionText: "Translate 'please' to Chinese?",
      answerOptions: [
        { answerText: "是的", isCorrect: false, chineseTranslation: "Yes" },
        { answerText: "不是", isCorrect: false, chineseTranslation: "No" },
        { answerText: "请", isCorrect: true, chineseTranslation: "Please" },
        { answerText: "对不起", isCorrect: false, chineseTranslation: "Sorry" },
      ],
    },
    {
      questionText: "What does '不是' mean in English?",
      answerOptions: [
        { answerText: "Yes", isCorrect: false, chineseTranslation: "是的" },
        { answerText: "No", isCorrect: true, chineseTranslation: "不是" },
        { answerText: "Hello", isCorrect: false, chineseTranslation: "你好" },
        {
          answerText: "Thank you",
          isCorrect: false,
          chineseTranslation: "谢谢",
        },
      ],
    },
    {
      questionText: "Translate 'thank you' to Chinese?",
      answerOptions: [
        { answerText: "对不起", isCorrect: false, chineseTranslation: "Sorry" },
        {
          answerText: "谢谢",
          isCorrect: true,
          chineseTranslation: "Thank you",
        },
        {
          answerText: "请问",
          isCorrect: false,
          chineseTranslation: "Excuse me",
        },
        { answerText: "是的", isCorrect: false, chineseTranslation: "Yes" },
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
              <h1 className="navbar-brand m-1">Chinese Quiz </h1>
            </div>
          </nav>
        </header>
        <div className="xyz d-flex justify-content-center align-items-center h-100" >
          <div className="col-5  card border-primary">
            <div className="card-body text-center">
              <h2 className="card-title">Chinese Quiz</h2>
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
                <h1 className="navbar-brand m-1">Chinese Quiz </h1>
              </div>
            </nav>
          </header>

          <div className="xyz d-flex justify-content-center align-items-center h-100">
            <div className="col-5  card border-primary">
              <div className="card-body  text-center">
                <h2 className="card-title">Chinese Quiz</h2>
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

export default ChineseQuiz;
