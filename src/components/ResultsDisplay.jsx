import React from "react";
import Modal from "react-modal";
import ResultsUpdate from "./ResultsUpdate";

Modal.setAppElement("#root");
const ResultsDisplay = ({
  result,
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
    <div className="allProperties">
      <span className="display">Name: {result.name}</span>
      <span className="display">Unit: {result.unit}</span>
      <span className="display">Grade: {result.grade}</span>
      <button
        className="remove-btn"
        onClick={() => {
          handleRemove(result.id);
        }}
      >
        Remove
      </button>
      <button
        className="edit-btn"
        onClick={() => {
          handleModalOpen(result.id);
        }}
      >
        Update
      </button>
      <hr />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          handleModalOpen(result.id);
        }}
        style={{
          overlay: { backgroundColor: "rgba(255, 255, 255, 0.2)" },
          content: {
            border: "none",
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <ResultsUpdate
          name={name}
          unit={unit}
          grade={grade}
          handleUpdate={handleUpdate}
          handleModalOpen={handleModalOpen}
          handleChange={handleChange}
        />
      </Modal>
    </div>
  );
};

export default ResultsDisplay;
