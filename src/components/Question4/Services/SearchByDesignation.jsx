import React, { useState } from "react";

const SearchByDesignation = ({ employees, setFilteredEmployees }) => {
  const [searchDesignation, setSearchDesignation] = useState("");

  const handleSearchByDesignation = () => {
    const filteredEmployees = employees.filter(
      (employee) =>
        employee.position.toLowerCase() === searchDesignation.toLowerCase()
    );
    setFilteredEmployees(filteredEmployees);
  };

  return (
    <div>
      <input
        type="text"
        value={searchDesignation}
        onChange={(e) => setSearchDesignation(e.target.value)}
        placeholder="Search by Designation"
        className="bg-slate-200 py-2 px-2 rounded-l-lg focus:outline-none"
      />

      <button
        className="bg-green-300 text-green-900 px-4 py-2 rounded-r-lg"
        onClick={handleSearchByDesignation}
      >
        Search
      </button>
    </div>
  );
};

export default SearchByDesignation;
