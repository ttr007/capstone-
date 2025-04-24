import React, { useState } from 'react';
import './quiz.css';

const quizData = [
  {
    id: 1,
    question: "What type of sampling method involves splitting the population into groups and selecting members randomly from each group?",
    options: ["Convenience Sampling", "Stratified Random Sampling", "Systematic Sampling", "Cluster Sampling"],
    correctAnswer: "Stratified Random Sampling"  
  },
  {
    id: 2,
    question: "A researcher is conducting a survey by standing outside a coffee shop and asking customers to participate. Which sampling method does this represent?",
    options: ["Convenience Sampling", "Random Sampling", "Stratified Sampling", "Systematic Sampling", "Cluster Sampling"],
    correctAnswer: "Convenience Sampling"  
  },
  {
    id: 3,
    question: "Which of the following is NOT a feature of probability sampling?",
    options: ["It includes an element of chance to eliminate bias.", "It guarantees that each group is equally represented.", "It includes methods such as simple random sampling and cluster sampling.", "It allows the researcher to choose participants based on convenience."],
    correctAnswer: "It allows the researcher to choose participants based on convenience."
  },
  {
    id: 4,
    question: "A researcher uses a random number generator to select participants for a study. Is this an example of:",
    options: ["Probability sampling", "Non-probability sampling"],
    correctAnswer: "Probability sampling"
  },
  {
    id: 5,
    question: "Participants of a study are selected by a researcher who chooses people walking by a university library at noon. Is this an example of:",
    options: ["Probability sampling", "Non-probability sampling"],
    correctAnswer: "Non-probability sampling"  
  },
];

function M1Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswerSelect = (option) => {
    setSelectedOption(option);
    setShowFeedback(true);

    setTimeout(() => {
      if (option === quizData[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
      
      setShowFeedback(false);
      setSelectedOption(null);
      
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
  };

  if (showScore) {
    return (
      <div className="quiz-container">
        <div className="score-section">
          <h2>Quiz Completed!</h2>
          <p>Your score: {score} out of {quizData.length}</p>
          <button 
            className="restart-button"
            onClick={handleRestart}
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="progress-indicator">
        Question {currentQuestion + 1} of {quizData.length}
      </div>
      
      <div className="question-section">
        <h3>{quizData[currentQuestion].question}</h3>
      </div>
      
      <div className="options-section">
        {quizData[currentQuestion].options.map((option) => (
          <button
            key={option}
            className={`option-btn ${
              showFeedback
                ? option === quizData[currentQuestion].correctAnswer
                  ? 'correct'
                  : selectedOption === option
                    ? 'incorrect'
                    : ''
                : ''
            }`}
            onClick={() => handleAnswerSelect(option)}
            disabled={selectedOption !== null}
          >
            {option}
          </button>
        ))}
      </div>
      
      {showFeedback && (
        <div className="feedback">
          {selectedOption === quizData[currentQuestion].correctAnswer
            ? 'Correct!'
            : `Incorrect. The correct answer is: ${quizData[currentQuestion].correctAnswer}`}
        </div>
      )}
    </div>
  );
}

export default M1Quiz;