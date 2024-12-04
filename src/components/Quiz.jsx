import React, { useState } from 'react';
import Questions from './Questions';
import questionData from './data/questionData.json'

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questionData[currentQuestionIndex];

  const handleAnswerClick = (selectedOption) => {
    // Check if the selected option is correct
    if (selectedOption === currentQuestion.answer) {
      setScore(prevScore => prevScore + 1);
    }

    // Move to next question or show result
    if (currentQuestionIndex < questionData.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  const styles = {
    quizContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#f0f2f5",
      fontFamily: "Arial, sans-serif",
    },
    resultContainer: {
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      padding: "30px",
      textAlign: "center",
      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
      maxWidth: "400px",
    },
    resultText: {
      fontSize: "1.5rem",
      color: "#333",
      marginBottom: "20px",
    },
    restartButton: {
      backgroundColor: "#28a745",
      color: "#ffffff",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    }
  };

  if (showResult) {
    return (
      <div style={styles.quizContainer}>
        <div style={styles.resultContainer}>
          <h2 style={styles.resultText}>
            Quiz Completed!
          </h2>
          <p style={styles.resultText}>
            Your Score: {score} out of {questionData.length}
          </p>
          <button 
            onClick={handleRestart} 
            style={styles.restartButton}
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.quizContainer}>
      <Questions
        question={currentQuestion.question}
        options={currentQuestion.options}
        onAnswerClick={handleAnswerClick}
      />
    </div>
  );
}

export default Quiz;