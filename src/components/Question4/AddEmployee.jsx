import React, { useState,useEffect } from "react";
import addEmployee from "./Services/AddEmp";

const AddEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    id: "",
    name: "",
    position: "",
  });

  const handleAddEmployee = () => {
    const newEmployeeWithId = {
      ...newEmployee,
      id: Math.random().toString(36).substring(7)
    };
    addEmployee(employees, newEmployeeWithId, setEmployees);
    setNewEmployee({ id: "", name: "", position: "" });
  }

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);
  
  return (
    <>
      <div className="flex  justify-center items-center gap-5 w-full">
        {/* <label className="flex flex-col gap-2 text-2xl">
        ID:
        <input
          type="text"
          value={newEmployee.id}
          onChange={(e) =>
            setNewEmployee({ ...newEmployee, id: e.target.value })
           
          }
          className=' rounded-xl bg-slate-300 focus:outline-none p-3 text-yellow-600 text-xl'

        />
      </label> */}

        <label className="flex flex-col gap-2 text-2xl">
          Name:
          <input
            type="text"
            value={newEmployee.name}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, name: e.target.value })
            }
            className=" rounded-xl bg-slate-300 focus:outline-none p-3 text-yellow-600 text-xl"
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
            className=" rounded-xl bg-slate-300 focus:outline-none p-3 text-yellow-600 text-xl"
          />
        </label>

        <div className="flex justify-center items-end h-24 ">
          <button
            className="bg-yellow-500 px-4 py-4 rounded-xl flex  justify-center items-center  text-green-700 font-bold"
            onClick={handleAddEmployee}
          >
            Add Employee
          </button>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
