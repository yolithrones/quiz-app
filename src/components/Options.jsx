import React from 'react';

function Options({ options, onAnswerClick }) {
  const styles = {
    optionStyle: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      width: "100%",
    },
    buttonStyle: {
      padding: "10px",
      fontSize: "1rem",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#007bff",
      color: "#ffffff",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    }
  };

  return (
    <div style={styles.optionStyle}>
      {options.map((option, index) => (
        <button
          key={index}
          type="button"
          style={styles.buttonStyle}
          onClick={() => onAnswerClick(option)} onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.buttonStyle.backgroundColor}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;