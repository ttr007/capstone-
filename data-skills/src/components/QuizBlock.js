import React, { useState } from 'react';
import './quiz.css';

function QuizBlock({ quizData }) {
  const [state, setState] = useState({
    currentQuestion: 0,
    selectedOption: '',
    showFeedback: false,
    score: 0,
    quizComplete: false,
  });

  const { currentQuestion, selectedOption, showFeedback, score, quizComplete } = state;
  const current = quizData[currentQuestion];

  const handleOptionClick = (option) => {
    if (showFeedback) return;

    setState((prev) => ({
      ...prev,
      selectedOption: option,
      showFeedback: true,
      score: option === current.correctAnswer ? prev.score + 1 : prev.score,
    }));
  };

  const handleNext = () => {
    if (currentQuestion + 1 < quizData.length) {
      setState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        selectedOption: '',
        showFeedback: false,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        quizComplete: true,
      }));
    }
  };

  const handleRestart = () => {
    setState({
      currentQuestion: 0,
      selectedOption: '',
      showFeedback: false,
      score: 0,
      quizComplete: false,
    });
  };

  return (
    <div className="quiz-container">
      {!quizComplete ? (
        <>
          <div className="progress-indicator">
            Question {currentQuestion + 1} of {quizData.length}
          </div>

          <div className="question-section">
            <h3>{current.question}</h3>
          </div>

          <div className="options-section">
            {current.options.map((option, index) => {
              let classNames = 'option-btn';
              if (showFeedback) {
                if (option === current.correctAnswer) {
                  classNames += ' correct';
                } else if (option === selectedOption) {
                  classNames += ' incorrect';
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={classNames}
                  disabled={showFeedback}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {showFeedback && (
            <div className="feedback">
              {selectedOption === current.correctAnswer ? (
                <>
                  <p className="text-green-700">Correct!</p>
                  <p>{current.explanation?.correct || "No explanation available."}</p>
                </>
              ) : (
                <>
                  <p className="text-red-700">Incorrect.</p>
                  <p>{current.explanation?.incorrect || "No explanation available."}</p>
                  <p className="mt-1 text-sm">
                    <em>Correct answer:</em> <strong>{current.correctAnswer}</strong>
                    <br />
                    {current.explanation?.correct || ""}
                  </p>
                </>
              )}
              <button onClick={handleNext} className="restart-button mt-4">
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="score-section">
          <h2>Quiz Complete!</h2>
          <p>
            You scored {score} out of {quizData.length}.
          </p>
          <button onClick={handleRestart} className="restart-button">
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizBlock;
