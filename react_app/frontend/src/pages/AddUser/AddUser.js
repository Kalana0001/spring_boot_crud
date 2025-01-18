import React, { useState } from 'react';
import './AddUser.css'; // Import the CSS
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // For now, just log the form data to console
    console.log('Form Data Submitted:', formData);

    try{
        const response = await fetch('http://localhost:8080/api/employee/addEmployee',{
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log("Employee Created:", data);
        navigate('/');

    }catch(err){
      console.error("Error Creating Employee", err);
    }
  };

  return (
    <div className="add-user-container">
      <h1 className="add-user-heading">Add New User</h1>
      <form className="add-user-form" onSubmit={handleSubmit}>

        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            required
          />
        </div>

        <button className="add-user-button" type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
