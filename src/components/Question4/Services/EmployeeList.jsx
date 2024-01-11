
import React from 'react';
import {BiSolidPencil} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
const EmployeeList = ({ employees,handleDeleteEmployee,handleUpdateEmployee }) => {
  return (
    <div className="xl:px-44 lg:px-14 px-4 md:overflow-hidden overflow-x-scroll w-full">
    <table className="w-full text-center bg-sky-600">
      <thead className="h-10">
        <tr className="text-indigo-950 text-3xl">
          <th className="bg-yellow-400 p-3">Id  </th>
          <th className="bg-blue-400">Name  </th>
          <th className="bg-red-400">Position </th>
        </tr>
      </thead>
      <tbody className="text-red-900 font-semibold">
        {employees.map((employee) => (
          <tr key={employee.id} className="bg-orange-200 border-4 border-green-700 my-3 text-2xl h-16">
            <td  className="bg-yellow-400 p-3">{employee.id}</td>
            <td className="bg-blue-400">{employee.name}</td>
            <td className="bg-red-400">{employee.position}</td>
           
            <td>
              <button
                onClick={() => handleUpdateEmployee(employee.id)}
                className="mr-3 text-green-600"
              >
               <BiSolidPencil/>
              </button>
              <button
                onClick={() => handleDeleteEmployee(employee.id)}
                className="text-red-500"
              >
                <AiFillDelete/>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default EmployeeList;
