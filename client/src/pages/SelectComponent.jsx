import React, { useState } from 'react';


function SelectComponent({ options }) {
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="select">Choose an option:</label>
      <select id="select" value={selectedOption} onChange={handleChange}>
        <option value="">Choose</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectComponent;
