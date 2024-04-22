import React from 'react'

import styles from "./Register.module.css";


export const Register = () => {
    return (
        <div className={styles.reg}>
            <h5>Login <i className="fi fi-rr-arrow-small-right"></i></h5>
            <form className={styles.regItems}>
                <h1>Sign in</h1>
                <label>Enter Username</label>
                <input type="text" placeholder="Username" />
                <label>Enter Email</label>
                <input type="email" placeholder="Email" />
                <label>Enter Password</label>
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm password" />
                <button type="submit">Sign in</button>
            </form>
        </div>
    )
}
