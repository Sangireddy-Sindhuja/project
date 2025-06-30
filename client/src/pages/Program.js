import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Programs() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/programs')
      .then(res => setPrograms(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Available Skill Programs</h2>
      <div className="row">
        {programs.map(p => (
          <div className="col-md-4" key={p._id}>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.description}</p>
                <p><strong>Category:</strong> {p.category}</p>
                <p><strong>Date:</strong> {new Date(p.date).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;