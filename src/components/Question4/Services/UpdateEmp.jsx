const updateEmployee = (employees, idToUpdate, updatedData, setEmployees) => {
  const indexToUpdate = employees.findIndex(
    (employee) => employee.id === idToUpdate
  );

  if (indexToUpdate !== -1) {
    const updatedEmployees = [...employees];
    updatedEmployees[indexToUpdate] = { ...updatedData };

    setEmployees(updatedEmployees);

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  }
};

export default updateEmployee;
