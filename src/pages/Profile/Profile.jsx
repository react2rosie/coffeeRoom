import styles from "./Profile.module.css";

import { getImageUrl } from "../../utils";

import React from 'react'
import { Footer } from "../../components/Footer/Footer";

import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";


export const Profile = () => {
    return (
        <div className={styles.all}>
            <Navbar />
            <div className={styles.menuwrap}>
                <div className={styles.menu}>
                    <ul>
                        <Link to="/profile"><li><i className="fi fi-rr-user"></i>Profile</li></Link>

                        <li className={styles.leave}><i className="fi fi-rr-leave"></i>Log out</li>
                    </ul>
                </div>
                <form className={styles.profile}>
                    <h1>Profile</h1>
                    <div className={styles.avatar}>
                        <img src={getImageUrl("icons/mirrorg.png")} alt="Hero" />
                        <label htmlFor="fileInput"><i className="fi fi-rr-camera"></i></label>
                        <input type="file" name="" id="fileInput" accept="image/*" style={{ display: "none" }} />
                    </div>
                    <label for="name">New Username</label>
                    <input type="text" placeholder="Username" id="name" />
                    <label for="email">New Email</label>
                    <input type="email" placeholder="Email" id="email" />
                    <label>New Password</label>
                    <input type="password" placeholder="Password" />
                    <label>Confirm New Password</label>
                    <input type="password" placeholder="Confirm password" />
                    <button type="submit">Update</button>
                    <div className={styles.out}>
                        <p>Log out</p>
                        <p>Delete Account</p>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}
