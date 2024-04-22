import React from 'react'
import styles from "./Sidebar.module.css";

import { getImageUrl } from "../../utils";

export const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarItems}>
                <h5>ABOUT ME</h5>
                <img src={getImageUrl("icons/backg.jpg")} alt="me" className={styles.aboutImg} />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus minus earum dicta sit, omnis iure similique quas eaque rerum qui nihil.</p>
            </div>
            <div className={styles.sidebarItems}>
                <h5>CATEGORIES</h5>
                <ul>
                    <li>Beauty DIY</li>
                    <li>K-pop</li>
                    <li>Recipe</li>
                    <li>Fashion</li>
                    <li>Hollywood</li>
                </ul>
            </div>
            <div className={styles.sidebarItems}>
                <h5>FOLLOW ME</h5>
                <div className={styles.follow}>
                    <i className="fi fi-brands-instagram"></i>
                    <i className="fi fi-brands-twitter-alt"></i>
                </div>
            </div>
        </div>
    )
}
