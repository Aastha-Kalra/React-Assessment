import React, { useState, useEffect } from "react";
import EmployeeList from "./Services/EmployeeList";
import SearchByDesignation from "./Services/SearchByDesignation";
import SearchByName from "./Services/SearchByName";
import updateEmployee from "./Services/UpdateEmp";
import UpdateEmployeeForm from "./Services/UpdateEmpForm";
const ViewEmployees = () => {
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);

  const [updateEmployeeData, setUpdateEmployeeData] = useState({
    id: "",
    name: "",
    position: "",
  });

  const handleUpdateEmployee = (id) => {
    const employeeToUpdate = employees.find((employee) => employee.id === id);
    if (employeeToUpdate) {
      setUpdateEmployeeData(employeeToUpdate);
      setUpdateModalOpen(true);
    }
  };
  const handleUpdateFormSubmit = (updatedData) => {
    updateEmployee(employees, updatedData.id, updatedData, setEmployees);
    setUpdateModalOpen(false);
    setUpdateEmployeeData({ id: "", name: "", position: "" });
  };

  const handleDeleteEmployee = (id) => {
    console.log("Deleting employee with id:", id);

    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    console.log("Updated employees after deletion:", updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    setEmployees(updatedEmployees);
  };

  const handleCancelUpdate = () => {
    setUpdateModalOpen(false);
    setUpdateEmployeeData({ id: "", name: "", position: "" });
  };

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  return (
    <div className="relative flex flex-col justify-start items-center  gap-5 h-screen ">
      <h2>Employee List</h2>
      <SearchByDesignation
        employees={employees}
        setFilteredEmployees={setFilteredEmployees}
      />
      <SearchByName
        employees={employees}
        setFilteredEmployees={setFilteredEmployees}
      />
      <EmployeeList
        employees={filteredEmployees.length ? filteredEmployees : employees}
        handleDeleteEmployee={handleDeleteEmployee}
        handleUpdateEmployee={handleUpdateEmployee}
      />
      {isUpdateModalOpen && (
        <div className="w-full h-screen absolute  bg-black/90 flex flex-col justify-center items-center">
          <div>
            <UpdateEmployeeForm
              employee={updateEmployeeData}
              onUpdate={handleUpdateFormSubmit}
              onCancel={handleCancelUpdate}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewEmployees;
