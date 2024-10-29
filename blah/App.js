import React, { useState } from 'react';
import './App.css'; // Optional if you want to add external styles

function App() {
  // State to hold form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh on form submit
    console.log('Form Data Submitted:', formData); // For now, log the data to console
    alert(`Form Submitted\nName: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <div className="App">
      <h1>React Form</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>
        
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
}

// Inline styles for the form elements
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px'
};

const inputStyle = {
  marginBottom: '15px',
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  width: '300px',
  fontSize: '16px'
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007BFF',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px'
};

export default App;
