const addEmployee = (employees, newEmployee, setEmployees) => {
  if(newEmployee.name.trim()!=="" &&  newEmployee.position.trim()!=="" ){
    setEmployees([...employees, newEmployee]);
    localStorage.setItem('employees', JSON.stringify([...employees,newEmployee]));
  }
  else{
    alert("Please enter the details")
  }
    
  };
  
  export default addEmployee;

