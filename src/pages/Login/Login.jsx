import React from 'react'

import styles from "./Login.module.css";

import { getImageUrl } from "../../utils";

export const Login = () => {
    return (
        <div className={styles.login}>
            <h5>Sign in <i className="fi fi-rr-arrow-small-right"></i></h5>
            <form className={styles.logItems}>
                <h1>Login</h1>
                <label>Enter Email</label>
                <input type="email" placeholder="Email" />
                <label>Enter Password</label>
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
