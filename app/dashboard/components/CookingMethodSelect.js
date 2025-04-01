"use client";

import React from "react";

const CookingMethodSelect = ({ onChange }) => {
  return (
    <select
      className="w-1/4 border-2 text-xl p-1"
      
      onChange={onChange}
    >
      <option value="">全部</option>
      <option value="a">炸</option>
      <option value="b">烤</option>
      <option value="c">蒸</option>
      <option value="d">炒</option>
      <option value="e">煨</option>
    </select>
  );
};

export default CookingMethodSelect;
