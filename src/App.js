// App.js
import React, { useState } from 'react';
import Login from './components/Login';
import EmployeeList from './components/EmployeeList';
import './App.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <div className="App">
            {isAuthenticated ? (
                <EmployeeList />
            ) : (
                <Login setLoggedIn={setIsAuthenticated} />
            )}
        </div>
    );
}

export default App;
