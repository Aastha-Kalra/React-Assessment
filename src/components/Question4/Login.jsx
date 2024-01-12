import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      onLogin();
      alert("Login successfully")
      navigate('/add')
      
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form className='flex justify-center items-center flex-col gap-4 text-3xl'>
      <h2 className='text-5xl my-4'>Login</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='mx-3 rounded-xl bg-slate-300 focus:outline-none p-3 text-yellow-600'
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='mx-3 rounded-xl bg-slate-300 focus:outline-none p-3 text-yellow-600'
        />
      </label>
      <br />
      <button className='bg-yellow-500 px-8 py-2 text-green-700 rounded-xl hover:bg-yellow-600'
       onClick={handleLogin}>Login</button>
    </form>
  );
};

export default Login;
