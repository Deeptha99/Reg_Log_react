import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import validation from './LoginValidation';

import email_icon from './Assets/email.png';
import password_icon from './Assets/password.png';

function Login() {
    const [values, setValues] = useState({
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
        if(errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/Login', values)
            .then((res) => {
                if(res.data === "Success"){
                    navigate('/Home');
                }
                else{
                    alert("No record existed");
                }
            })
            .catch(err => console.log(err));
        }
    }
return (
    <div className="App">
            <div className="auth-form-container">
                <form className="login-form" onSubmit={handleSubmit}  >
                    <div className="header">
                        <h1>Login</h1>
                        <div className="underline"></div>
                    </div>
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder="your email@gmail.com" onChange={handleInput} id="email" name="email" />
                        {errors.email && <p className="error_msg" style={{color: "red"}}>{errors.email}</p>}
                        
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder="*********" onChange={handleInput} id="password" name="password" /> 
                        {errors.password && <p className="error_msg" style={{color: "red"}}>{errors.password}</p>}
                    </div>
                    <button className="login" type="submit">Login</button>
                </form>
                <h3>Don't have an account? <Link to="/Register" className="register-here"> Register here</Link></h3>
            </div>
        </div>
  )
}

export default Login