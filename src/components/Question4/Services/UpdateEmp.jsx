const updateEmployee = (employees, idToUpdate, updatedData, setEmployees) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === idToUpdate ? { ...employee, ...updatedData } : employee
    );
  
    setEmployees(updatedEmployees);
  };
  
  export default updateEmployee;
  