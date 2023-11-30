import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import validation from './RegisterValidation';

import email_icon from './Assets/email.png';
import password_icon from './Assets/password.png';
import user_icon from './Assets/person.png';

function Login() {

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    const handleInput = (event) =>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit =(event) =>{
        event.preventDefault();
        setErrors(validation(values));
        if(errors.username === "" && errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/Register', values)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    }

  return (
    <div className="App">
            <div className="auth-form-container">
                <form className="login-form" onSubmit={handleSubmit}  >
                    <div className="header">
                        <h1>Register</h1>
                        <div className="underline"></div>
                    </div>
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="username" placeholder="Enter your Username" id="username" name="username" onChange={handleInput} />
                        {errors.username && <p className="error_msg" style={{color: "red"}}>{errors.username}</p>}
                        
                    </div>
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder="Enter your email@gmail.com" id="email" name="email" onChange={handleInput}/>
                        {errors.email && <p className="error_msg" style={{color: "red"}}>{errors.email}</p>}
                        
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder="*********" id="password" name="password" onChange={handleInput}/>
                        {errors.password && <p className="error_msg" style={{color: "red"}}>{errors.password}</p>}
                    </div>
                    <button className="register" type="submit">Register</button>
                </form>
                <h3>Already you have an account? <Link to="/" className="login-here"> Login here</Link></h3>
            </div>
        </div>
  )
}

export default Login