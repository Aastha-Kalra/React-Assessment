import React,{useState} from 'react'
import Login from './Login';
import Dashboard from './Dashboard';
const Question4 = ({}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('Admin');
  
    const handleLogin = () => {
      setIsLoggedIn(true);
    };
  return (
    <div>
    {isLoggedIn ? (
      <Dashboard username={username} />
    ) : (
      <Login onLogin={handleLogin} />
    )}
  </div>
  )
}

export default Question4
