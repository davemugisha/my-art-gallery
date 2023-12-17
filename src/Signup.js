import Navbar from "./Navbar";
import { Link } from "react-router-dom/cjs/react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [statusMessage, setStatusMessage] = useState(''); // Add this line

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userRequest = {
            firstName,
            lastName,
            email,
            userName,
            password,
          };
    
        console.log('Values to be sent to the backend:', userRequest);

        try {
            const response = await axios.post('http://localhost:8080/auth/signup', userRequest);
        
            // Handle success response
            console.log('Response from the backend:', response.data);
            setStatusMessage('Account successfully created!'); // Add this line
          } catch (error) {
            // Handle error response
            console.error('Error:', error);
            setStatusMessage('Failed to create account.'); // Add this line
          }
    };


    return (
        <>
            <div className="signBg">
                <Navbar />
                <div className="signform">
                    <form onSubmit={handleSubmit}>
                        <h1 style={{ textAlign: 'center', margin: '20px',}}>Register Here!</h1>
                        <label htmlFor="firstname" style={{ display: 'block', }}>First Name</label>
                        <input type="text" placeholder="Enter your firstname" required name="firstname" id="firstname" className="inputt" value={firstName} onChange={(e) => setFirstname(e.target.value)} />
                        <br /><br />
                        <label htmlFor="lastname" style={{ display: 'block', }}>Last Name</label>
                        <input type="text" placeholder="Enter your lastname" required name="lastname" id="lastname" className="inputt" value={lastName} onChange={(e) => setLastname(e.target.value)} />
                        <br /><br />
                        <label htmlFor="email" style={{ display: 'block', }}>Email</label>
                        <input type="email" placeholder="example@gmail.com" required name="email" id="email" className="inputt" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <br /><br />
                        <label htmlFor="username" style={{ display: 'block', }}>Username</label>
                        <input type="text" placeholder="Create your username" required name="username" id="username" className="inputt" value={userName} onChange={(e) => setUsername(e.target.value)} />
                        <br /><br />
                        <label htmlFor="password" style={{ display: 'block' }}>Password</label>
                        <input type="password" placeholder="Enter your password" required name="password" id="password" className="inputt" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <br /><br />
                        <input type="submit" id="Signup" name="Signup" value="Signup" className="submit" />
                        <br />
                        <p>{statusMessage}</p> {/* Add this line */}
                    </form>
                    <Link to="/Login" style={{ textDecoration: 'none', color: 'grey', texAlign: 'center' }}>Already Have an Account? Login Here</Link>
                </div>
            </div>
        </>
    );
}
 
export default Signup;
