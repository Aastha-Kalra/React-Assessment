import React, { useState } from "react";
import addEmployee from "./Services/AddEmp";
import updateEmployee from "./Services/UpdateEmp";
import UpdateEmployeeForm from "./Services/UpdateEmpForm";
import EmployeeList from "./services/EmployeeList";
import SearchByDesignation from "./services/SearchByDesignation";
import SearchByName from "./services/SearchByName";

const Dashboard = ({ username }) => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    id: "",
    name: "",
    position: "",
  });
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);

  const [updateEmployeeData, setUpdateEmployeeData] = useState({
    id: "",
    name: "",
    position: "",
  });
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  const handleAddEmployee = () => {
    const newEmployeeWithId = {
      ...newEmployee,
      id: Math.random().toString(36).substring(7)
    };
    addEmployee(employees, newEmployeeWithId, setEmployees);
    setNewEmployee({ id: "", name: "", position: "" });
  };

  const handleUpdateEmployee = (id) => {
   
    const employeeToUpdate = employees.find((employee) => employee.id === id);
    if (employeeToUpdate) {
      setUpdateEmployeeData(employeeToUpdate);
      setUpdateModalOpen(true);
    }
  };

  const handleUpdateFormSubmit = (updatedData) => {
    updateEmployee(employees, updatedData.id, updatedData, setEmployees);
    setUpdateModalOpen(false);;
    setUpdateEmployeeData({ id: "", name: "", position: "" });
  };
  const handleDeleteEmployee = (id) => {
    console.log('Deleting employee with id:', id);
  
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    console.log('Updated employees after deletion:', updatedEmployees);
  
    setEmployees(updatedEmployees);
  };

  const handleCancelUpdate = () => {
    setUpdateModalOpen(false);
    setUpdateEmployeeData({ id: "", name: "", position: "" });
  };


  return (
    <div className="flex flex-col  justify-center items-center gap-5 relative">
      <h2>Welcome, {username}!</h2>
<div className="flex  justify-center items-center gap-5 w-full">
<label className="flex flex-col gap-2 text-2xl">
        ID:
        <input
          type="text"
          value={newEmployee.id}
          onChange={(e) =>
            setNewEmployee({ ...newEmployee, id: e.target.value })
           
          }
          className=' rounded-xl bg-slate-300 focus:outline-none p-3 text-yellow-600 text-xl'

        />
      </label>

      <label className="flex flex-col gap-2 text-2xl">
        Name:
        <input
          type="text"
          value={newEmployee.name}
          onChange={(e) =>
            setNewEmployee({ ...newEmployee, name: e.target.value })
          }
          className=' rounded-xl bg-slate-300 focus:outline-none p-3 text-yellow-600 text-xl'

        />
      </label>

      <label className="flex flex-col gap-2 text-2xl">
        Position:
        <input
          type="text"
          value={newEmployee.position}
          onChange={(e) =>
            setNewEmployee({ ...newEmployee, position: e.target.value })
          }
          className=' rounded-xl bg-slate-300 focus:outline-none p-3 text-yellow-600 text-xl'

        />
      </label>
      
<div className="flex justify-center items-end h-24 ">
<button className="bg-yellow-500 px-4 py-4 rounded-xl flex  justify-center items-center  text-green-700 font-bold" onClick={handleAddEmployee}>Add Employee</button>
</div>
</div>

     <div className="flex gap-10">
     <SearchByDesignation
        employees={employees}
        setFilteredEmployees={setFilteredEmployees}
      />
      <SearchByName
        employees={employees}
        setFilteredEmployees={setFilteredEmployees}
      />

     </div>
      <EmployeeList
        employees={filteredEmployees.length ? filteredEmployees : employees}
        handleDeleteEmployee={handleDeleteEmployee}
        handleUpdateEmployee={handleUpdateEmployee}
      />

{isUpdateModalOpen && (
        <div className='w-full h-screen absolute  bg-black/90 flex flex-col justify-center items-center'>
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

export default Dashboard;
