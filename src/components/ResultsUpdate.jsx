import React from 'react';

const ResultsUpdate = ({ name, unit, grade, handleChange, handleUpdate, handleModalOpen }) => {
  return (
    <div className="results-edit">
      <form className="ui-form" autoComplete="off" onSubmit={handleUpdate}>
        <h2>Update Entry</h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          autoFocus
          required
          placeholder="Name"
          value={name}
          onChange={handleChange}
        />
        <label htmlFor="unit">Unit:</label>
        <input
          type="text"
          name="unit"
          required
          placeholder="Unit"
          value={unit}
          onChange={handleChange}
        />
        <label htmlFor="grade">Grade:</label>
        <input
          type="text"
          name="grade"
          required
          placeholder="Grade"
          value={grade}
          onChange={handleChange}
        />
        <input type="submit" value="Update" />
      </form>
      <button className="close-btn" onClick={handleModalOpen}>Close</button>
    </div>
  );
};

export default ResultsUpdate;
