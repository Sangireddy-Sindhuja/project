import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/auth/login', form);
    localStorage.setItem('token', res.data.token);
    alert('Login successful');
  };

  return (
    <div className="container mt-4">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input name="email" className="form-control mb-2" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" className="form-control mb-2" placeholder="Password" onChange={handleChange} />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;