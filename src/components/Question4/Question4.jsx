import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import Login from "./Login";
import AddEmployee from "./AddEmployee";
import ViewEmployees from "./ViewEmployee";

const Question4 = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [employees, setEmployees] = useState([]);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <div>
         <nav className="flex justify-center items-center">
         {
           !isLoggedIn? null:  <ul className="flex justify-center items-center gap-5">
           <li>
             <Link
               to="/add"
               onClick={() => {
                 if (!isLoggedIn) alert("please login first ");
                 navigate("/");
               }}
             >
               Add Employee
             </Link>
           </li>
           <li>
             <Link to="/view"  onClick={() => {
                 if (!isLoggedIn) alert("please login first ");
                 navigate("/");
               }}>View Employees</Link>
           </li>
         </ul>
         }
      
      </nav>
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/*" element={<Login onLogin={handleLogin} />} />
          </>
        ) : (
          <>
            <Route
              exact
              path="/add"
              element={<AddEmployee setEmployees={setEmployees} />}
            />
            <Route
              exact
              path="/view"
              element={<ViewEmployees employees={employees} />}
            />
          </>
        )}
      </Routes>
   
    </div>
  );
};

export default Question4;
