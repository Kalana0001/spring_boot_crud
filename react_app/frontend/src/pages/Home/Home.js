import React, { useEffect, useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/employee/getEmployee');
        const data = await response.json();
        console.log("Employees Fetched:", data);
        setEmployees(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching employees", err);
        setEmployees([]);
      }
    };
    fetchEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this employee?");
    
    if (isConfirmed) {
      try {
        const response = await fetch(`http://localhost:8080/api/employee/deleteEmployee/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          setEmployees((prevEmployees) => 
            prevEmployees.filter((employee) => employee.id !== employee.id)
          )
        }
        const data = await response.json();
        console.log("Employee Deleted:", data);
        setEmployees(employees.filter((employee) => employee.id !== id));
      } catch (err) {
        console.error("Error deleting employee", err);
      }
    }
  };

  const handleUpdate = (id) => {
    navigate(`/updateuser/${id}`);
  };
  return (
    <div className="page-container">
      <h1 className="page-heading">Employee Directory</h1>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.department}</td>
                <td>
                  <button className="button-edit" 
                  onClick={() => handleUpdate(employee.id)}>
                    Update
                  </button>
                  <button
                    className="button-delete"
                    onClick={() => deleteEmployee(employee.id)} 
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="no-data-message" colSpan="5">No employees available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
