import React,{useEffect, useState} from 'react'
import Login from './Login';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import AddEmployee from './AddEmployee'
import ViewEmployees from './ViewEmployee'
const Question4 = ({}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('Admin');
    const [employees, setEmployees] = useState([]);
    const handleLogin = () => {
      setIsLoggedIn(true);
    };
    useEffect(()=>{
      isLoggedIn? setUsername(username):setUsername(null)
    })
  return (
    <div>
   
   <BrowserRouter>
   <Routes>
   <Route exact path="/"  element={<Login onLogin={handleLogin} />}/>
     <Route exact path="/add"   element={<AddEmployee setEmployees={setEmployees}/>} />
     <Route exact path="/view" element={<ViewEmployees employee={employees}/>} />
   </Routes>
 </BrowserRouter>
   
  </div>
  )
}

export default Question4
