import React from 'react'

import styles from "./Footer.module.css";

import { getImageUrl } from "../../utils";

export const Footer = () => {
    return (
        <div className={styles.foot}>
            <div className={styles.top}>
                <div className={styles.nwrap}>
                    <div className={styles.name}>
                        <img src={getImageUrl("logo/coffee talk.png")} alt="Hero" width={30} />
                        <h5>Coffee<span>Room</span></h5>
                    </div>
                    <p>A collection of stories, gists and news from the entertainment world.</p>
                </div>
                <div className={styles.news}>
                    <p><span>N</span>ever miss a post! <br />Join Our Newsletter</p>
                    <form action=""><input type="email" name="email" id="" placeholder='Email' />
                        <button type="submit">Subscribe</button>
                    </form>

                </div>
                <div className={styles.follow}>
                    <p>Follow me</p>
                    <div className={styles.icon}>
                        <i className="fi fi-brands-instagram"></i>
                        <i className="fi fi-brands-twitter-alt"></i>
                    </div>
                </div>
            </div>

            <p className={styles.copy}>
                Copyright &copy; CoffeeRoom 2024. All Rights Reserved.
            </p>
        </div>
    )
}
