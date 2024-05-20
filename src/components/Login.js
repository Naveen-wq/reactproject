// components/Login.js
import React, { useState } from 'react';

function Login({ setLoggedIn }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implement your authentication logic here.
        // For simplicity, let's assume authentication is successful if username and password are not empty.
        if (username && password) {
            setLoggedIn(true); // Update the authentication state to true
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
