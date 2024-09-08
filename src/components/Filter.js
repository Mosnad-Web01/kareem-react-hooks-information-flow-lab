/* eslint-disable react/prop-types */
import React from 'react';

const Filter = ({ onCategoryChange }) => {
  return (
    <select onChange={onCategoryChange}>
      <option value="all">All</option>
      <option value="grocery">Grocery</option>
      <option value="electronics">Electronics</option>
      <button onClick={onCategoryChange}></button>
    </select>
  );
};

export default Filter;