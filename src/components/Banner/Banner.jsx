import styles from "./Banner.module.css";

import { getImageUrl } from "../../utils";

import React from 'react'
import { Link } from "react-router-dom";

export const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.main}>
                <h2>Coffee<span>Room</span></h2>
                <p><b><i>"Lights, Camera, Coffee: Your Daily Shot of Entertainment"</i></b></p>
                <p className={styles.link}><Link to="/register">Sign in</Link></p>
            </div>
            <div className={styles.bord}><img src={getImageUrl("logo/coffee talk.png")} alt="Hero" className={styles.img} /></div>
        </section>

    )
}
