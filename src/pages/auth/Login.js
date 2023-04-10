import React from 'react'
import styles from './login.module.css'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { login } = useContext(AuthContext);

    const navigate = useNavigate()

    const handleLogin = () => {
        login();
        navigate('/')
    };

    return (
        <>
            <div style={{ backgroundColor: '#080710', zIndex: "-1", padding: "50vh" }}>
                <div className={styles.background}>
                    <div className={styles.shape}></div>
                    <div className={styles.shape}></div>
                </div>
                <form className={styles.login_form}>
                    <h3>Login Page</h3>

                    <label className={styles.login_label} htmlFor="username">Username</label>
                    <input className={styles.login_input} type="text" placeholder="Email address" id="username" autoComplete='off' required />

                    <label className={styles.login_label} htmlFor="password">Password</label>
                    <input className={styles.login_input} type="password" placeholder="Password" id="password" autoComplete='off' required />

                    <button className={styles.login_button} onClick={handleLogin}>Log In</button>
                </form>
            </div>
        </>
    )
}

export default Login