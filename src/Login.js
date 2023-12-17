import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import Navbar from './Navbar';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://myartgallery.onrender.com/auth/login', {
                userName: username,
                password: password,
            });

            if (response.status === 200) {
                alert('Login successful!');
                history.push('/User/Profile');
                // Save the username for sessions
                sessionStorage.setItem('username', username);
            } else {
                alert('Login failed. Please check your username and password.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while logging in.');
        }
    };

    return (
        <>
            <div className="loginBg">
                <Navbar />
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <h1 style={{ textAlign: 'center', marginTop: 20,}}>Welcome Back!</h1>
                        <br /><br />
                        <label htmlFor="username" style={{ display: 'block', }}>Username</label>
                        <input type="text" placeholder="Enter your username" required name="username" id="username" className="inputt" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <br /><br />
                        <label htmlFor="password" style={{ display: 'block', }}>Password</label>
                        <input type="password" placeholder="Enter your password" required name="password" id="password" className="inputt" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <br /><br />
                        <input type="submit" id="Login" name="Login" value="Login" className="submit" />
                        <br />
                        <Link to="/Signup" style={{ textDecoration: 'none', color: 'grey', textAlign: 'center', }}>Don't Have an Account? Signup Here</Link>
                    </form>
                </div>
            </div>
        </>
    );
}
 
export default Login;
