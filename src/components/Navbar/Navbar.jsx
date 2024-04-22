import styles from "./Navbar.module.css";

import { getImageUrl } from "../../utils";

import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <section className={styles.Navbar}>
            <div className={styles.leftNav}>
                <Link to="/">
                    <img src={getImageUrl("logo/coffee talk.png")} alt="Hero" className={styles.logoImg} />
                </Link>
                <div className={styles.s1}><div className={styles.search}>
                    <input type="text" placeholder='Search' />
                    <i className="fi fi-rr-search"></i>
                </div></div>
                <div className={styles.s2}><div className={styles.search}>

                    <i className="fi fi-rr-search" style={{ backgroundColor: "white", padding: "9px 10px 7px 10px", borderRadius: "100%" }}></i>
                </div></div>

            </div>
            <div className={styles.rightNav}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/write"><i className="fi fi-rr-file-edit text-xl"></i>Write</Link></li>
                    <li><Link to="/profile"><img src={getImageUrl("icons/mirrorg.png")} alt="Hero" className={styles.avatar} /></Link></li>
                </ul>
            </div>

        </section>
    )
}
