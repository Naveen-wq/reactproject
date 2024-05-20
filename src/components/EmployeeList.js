import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Sample employee data
        const sampleData = [
            { id: 1, firstName: 'Naveen', lastName: 'g', designation: 'Software Engineer', empId: '001', project: 'A', status: 'Active' },
            { id: 2, firstName: 'Balu', lastName: 'h', designation: 'Project Manager', empId: '002', project: 'B', status: 'Inactive' },
            { id: 3, firstName: 'Haneesh', lastName: 'f', designation: 'Designer', empId: '003', project: 'C', status: 'Active' }
        ];

        setEmployees(sampleData);
    }, []);

    const handleDelete = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id));
    };

    const handleAddUser = () => {
        const firstName = prompt("Enter first name:");
        const lastName = prompt("Enter last name:");
        const designation = prompt("Enter designation:");
        const empId = prompt("Enter employee ID:");
        const project = prompt("Enter project:");
        const status = prompt("Enter status (Active/Inactive):");

        if (firstName && lastName && designation && empId && project && status) {
            const newEmployee = {
                id: employees.length + 1,
                firstName,
                lastName,
                designation,
                empId,
                project,
                status
            };
            setEmployees([...employees, newEmployee]);
        }
    };

    const handleLogout = () => {
        navigate('./Login');
    };

    return (
        <div className="container mt-5">
            <h2><u>Employee List</u></h2>
            
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Designation</th>
                        <th>Emp ID</th>
                        <th>Project</th>
                        <th>Status</th>
                        <th>Action</th>
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
                            <td>
                                <button className="btn btn-primary mr-2" onClick={() => console.log(`Update employee with ID ${employee.id}`)}>Update</button>
                                <button className="btn btn-danger" onClick={() => handleDelete(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="d-flex justify-content-between mt-3">
                <button className="btn btn-primary" onClick={handleAddUser}>Add User</button>
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default EmployeeList;
