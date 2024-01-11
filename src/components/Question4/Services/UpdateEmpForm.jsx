
import React, { useState } from 'react';

const UpdateEmployeeForm = ({ employee, onUpdate, onCancel }) => {
  const [updatedData, setUpdatedData] = useState(employee);
  const handleUpdate = () => {
    onUpdate(updatedData);
  };

  return (
    <div  className='flex justify-center items-center flex-col gap-3 text-3xl w-screen h-screen py-10 '>
      <h3>Update Employee</h3>
      <label>
        Name:
        <input
          type="text"
          value={updatedData.name}
          onChange={(e) => setUpdatedData({ ...updatedData, name: e.target.value })}
          className=' rounded-xl bg-slate-300 focus:outline-none p-3 text-yellow-600 text-xl'

        />
      </label>
      <br />
      <label>
        Position:
        <input
          type="text"
          value={updatedData.position}
          onChange={(e) => setUpdatedData({ ...updatedData, position: e.target.value })}
          className=' rounded-xl bg-slate-300 focus:outline-none p-3 text-yellow-600 text-xl'

        />
      </label>
      <br />
     <div className='flex gap-5'>
     <button className="bg-yellow-500 px-4 py-4 rounded-xl flex  justify-center items-center  text-green-700 font-bold"  onClick={handleUpdate}>Update</button>
      <button className="bg-red-600 px-4 py-4 rounded-xl flex  justify-center items-center  text-green-400 font-bold"  onClick={onCancel}>Cancel</button>
     </div>
    </div>
  );
};

export default UpdateEmployeeForm;
