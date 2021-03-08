import React from "react";
import ResultsDisplay from "./ResultsDisplay";
const ResultsList = ({
  results,
  handleRemove,
  modalIsOpen,
  handleModalOpen,
  handleUpdate,
  handleChange,
  name,
  unit,
  grade,
}) => {
  return (
    <div className="results-display">
      
      {results.map((result) => (
        <ResultsDisplay
          result={result}
          key={result.id}
          handleRemove={handleRemove}
          modalIsOpen={modalIsOpen}
          handleModalOpen={handleModalOpen}
          handleUpdate={handleUpdate}
          handleChange={handleChange}
          name={name}
          unit={unit}
          grade={grade}
        />
      ))}
    </div>
  );
};

export default ResultsList;
