import React, { useEffect, useState } from "react";
import data from './Question3.json'
const Question3 = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(data.persons);
  });

  return (
    <div className="flex justify-center items-center flex-col xl:px-44 lg:px-14 px-4  md:overflow-hidden overflow-x-scroll w-full">
      <h1 className="text-4xl  my-8">Fetching User data</h1>
      <table className="w-full text-center bg-sky-600 ">
        <thead className="h-10">
          <tr className="text-indigo-950 text-3xl">
            <th className="bg-white">User_id </th>
            <th className="bg-yellow-400 p-3">Name </th>
            <th className="bg-blue-400">Age </th>
            <th className="bg-red-400">City </th>
          </tr>
        </thead>
        <tbody className="text-red-900 font-semibold">
          {users && users.map((item, i) => (
            <tr
              key={i}
              className="bg-orange-200 border-4 border-green-700 my-3 text-2xl h-16"
            >
              <td className="bg-sky-400">{item.id}</td>
              <td className="bg-yellow-400 p-3">{item.name}</td>
              <td className="bg-blue-400">{item.age}</td>
              <td className="bg-red-400">{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Question3;