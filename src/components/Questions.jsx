import React from 'react';
import Options from './Options';

function Questions({ question, options, onAnswerClick }) {
  const styles = {
    questionContainer: {
      backgroundColor: "#f8f9fa",
      border: "1px solid #e9ecef",
      borderRadius: "8px",
      padding: "20px",
      maxWidth: "500px",
      margin: "0 auto",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    questionText: {
      fontSize: "1.2rem",
      marginBottom: "15px",
      color: "#333",
      textAlign: "center",
    }
  };

  return (
    <div style={styles.questionContainer}>

      
      <h2 style={styles.questionText}>{question}</h2>
      
      <Options 
        options={options} 
        onAnswerClick={onAnswerClick} 
      />
    </div>
  );
}

export default Questions;