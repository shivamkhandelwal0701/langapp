import React, { useState } from "react";

const FrenchQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      questionText: "Translate 'hello' to French language?",
      answerOptions: [
        { answerText: "Au revoir", isCorrect: false },
        { answerText: "jame same", isCorrect: false },
        { answerText: "Merci", isCorrect: false },
        { answerText: "Bonjour", isCorrect: true },
      ],
    },
    {
      questionText: "Translate 'goodbye' to French language?",
      answerOptions: [
        { answerText: "Bonjour", isCorrect: false },
        { answerText: "Au revoir", isCorrect: true },
        { answerText: "Merci", isCorrect: false },
        { answerText: "Pardon", isCorrect: false },
      ],
    },
    {
      questionText: "What does 'merci' mean in English?",
      answerOptions: [
        { answerText: "Hello", isCorrect: false },
        { answerText: "Thank you", isCorrect: true },
        { answerText: "Goodbye", isCorrect: false },
        { answerText: "Sorry", isCorrect: false },
      ],
    },
    {
      questionText: "Translate 'yes' to French language?",
      answerOptions: [
        { answerText: "Oui", isCorrect: true },
        { answerText: "Non", isCorrect: false },
        { answerText: "S'il vous plaît", isCorrect: false },
        { answerText: "Excusez-moi", isCorrect: false },
      ],
    },
    {
      questionText: "What does 'bonjour' mean in English?",
      answerOptions: [
        { answerText: "Goodbye", isCorrect: false },
        { answerText: "Thank you", isCorrect: false },
        { answerText: "Please", isCorrect: false },
        { answerText: "Hello", isCorrect: true },
      ],
    },
    {
      questionText: "Translate 'thank you' to French language?",
      answerOptions: [
        { answerText: "Pardon", isCorrect: false },
        { answerText: "Merci", isCorrect: true },
        { answerText: "S'il vous plaît", isCorrect: false },
        { answerText: "Excusez-moi", isCorrect: false },
      ],
    },
    {
      questionText: "What does 'excusez-moi' mean in English?",
      answerOptions: [
        { answerText: "Hello", isCorrect: false },
        { answerText: "Thank you", isCorrect: false },
        { answerText: "Sorry", isCorrect: true },
        { answerText: "Goodbye", isCorrect: false },
      ],
    },
    {
      questionText: "Translate 'please' to French language?",
      answerOptions: [
        { answerText: "Oui", isCorrect: false },
        { answerText: "S'il vous plaît", isCorrect: true },
        { answerText: "Non", isCorrect: false },
        { answerText: "Au revoir", isCorrect: false },
      ],
    },
    {
      questionText: "What does 'non' mean in English?",
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: true },
        { answerText: "Hello", isCorrect: false },
        { answerText: "Thank you", isCorrect: false },
      ],
    },
    {
      questionText: "Translate 'sorry' to French language?",
      answerOptions: [
        { answerText: "Merci", isCorrect: false },
        { answerText: "Pardon", isCorrect: true },
        { answerText: "Excusez-moi", isCorrect: false },
        { answerText: "Au revoir", isCorrect: false },
      ],
    },
  ];
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
              <h1 className="navbar-brand m-1">French Quiz </h1>
            </div>
          </nav>
        </header>
        <div className=" xyz d-flex justify-content-center align-items-center h-100">
          <div className="col-5 card border-primary">
            <div className=" card-body text-center">
              <h2 className="card-title">French Quiz</h2>
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
                <h1 className="navbar-brand m-1">French Quiz</h1>
              </div>
            </nav>
          </header>
          <div className="d-flex xyz justify-content-center align-items-center h-100">
            <div className="col-5 card border-primary">
              <div className="card-body text-center">
                <h2 className="card-title">French Quiz</h2>
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

export default FrenchQuiz;
