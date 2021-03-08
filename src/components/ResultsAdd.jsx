import React from "react";

const ResultsAdd = ({ name, unit, grade, handleChange, handlePost }) => {
  return (
    <div className="results-add">
      <form className="ui-form" autoComplete="off" onSubmit={handlePost}>
        <h2>New Entry</h2>
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
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ResultsAdd;
