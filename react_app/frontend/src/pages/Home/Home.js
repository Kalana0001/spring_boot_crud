import React, { useEffect, useState } from 'react';
import './Home.css';
const Home = () => {
  const [employees, setEmployees] = useState([]);

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
                  <button className="button-edit">Edit</button>
                  <button className="button-delete">Delete</button>
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
