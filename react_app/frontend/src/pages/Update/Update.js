import React, { useEffect, useState } from 'react';
import './Update.css'; // Import the CSS
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: ''
  });
  const [error, setError] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Fetch employee data on component mount
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/employee/getEmployee/${id}`);
        const data = await response.json();
        if (data) {
          setFormData(data);
        } else {
          setError('Employee not found');
        }
      } catch (err) {
        console.error('Error fetching user', err);
        setError('Error fetching employee data');
      }
    };
    getUser();
  }, [id]);

  // Form validation
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      setError('All fields are required');
      return false;
    }
    if (!formData.email.includes('@')) {
      setError('Please provide a valid email');
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch(`http://localhost:8080/api/employee/updateEmployee/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Employee Updated:', data);
        navigate('/');
      } else {
        setError('Error updating employee');
      }
    } catch (err) {
      console.error('Error updating user', err);
      setError('Error updating employee');
    }
  };

  return (
    <div className="add-user-container">
      <h1 className="add-user-heading">Edit User</h1>
      {error && <div className="error-message">{error}</div>}
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

        <button type="submit" className="add-user-button">
          Edit User
        </button>
      </form>
    </div>
  );
};

export default Update;
