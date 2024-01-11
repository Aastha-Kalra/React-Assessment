// services/SearchByName.js
import React, { useState } from 'react';

const SearchByName = ({ employees, setFilteredEmployees }) => {
  const [searchName, setSearchName] = useState('');

  const handleSearchByName = () => {
    const filteredEmployees = employees.filter(
      (employee) => employee.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setFilteredEmployees(filteredEmployees);
  };

  return (
    <div>
     
      <label>
        <input
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          placeholder='Search by Name'
          className='bg-slate-200 py-2 px-2 rounded-l-lg focus:outline-none'
        />
      </label>
      <button className='bg-green-300 text-green-900 px-4 py-2 rounded-r-lg' onClick={handleSearchByName}>Search</button>
    </div>
  );
};

export default SearchByName;
