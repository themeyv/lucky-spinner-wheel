import React from 'react';

const ResultCard = ({ result, onClose }) => {
  return (
    <div className="result-card">
      <p>You have won:</p>
      <p>{result}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ResultCard;
