import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/users/register', form);
    alert('Registration Successful');
  };

  return (
    <div className="container mt-4">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" className="form-control mb-2" placeholder="Name" onChange={handleChange} />
        <input name="email" className="form-control mb-2" placeholder="Email" onChange={handleChange} />
        <input name="password" className="form-control mb-2" type="password" placeholder="Password" onChange={handleChange} />
        <button className="btn btn-success">Register</button>
      </form>
    </div>
  );
}

export default Register;