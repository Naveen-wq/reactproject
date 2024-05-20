// components/EmployeeList.js
import React, { useEffect, useState } from 'react';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        // Sample data for demonstration
        const sampleData = [
            { id: 1, firstName: 'John', lastName: 'Doe', designation: 'Software Engineer', empId: 'E001', project: 'Project A', status: 'Active' },
            { id: 2, firstName: 'Jane', lastName: 'Smith', designation: 'Project Manager', empId: 'E002', project: 'Project B', status: 'Inactive' },
            { id: 3, firstName: 'Michael', lastName: 'Johnson', designation: 'UI/UX Designer', empId: 'E003', project: 'Project C', status: 'Active' }
            // Add more sample data as needed
        ];
        
        setEmployees(sampleData);
    }, []);

    return (
        <div className="container mt-5">
            <h2 ><u>Employee List</u></h2>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Designation</th>
                        <th>Emp ID</th>
                        <th>Project</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.empId}</td>
                            <td>{employee.project}</td>
                            <td>{employee.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
