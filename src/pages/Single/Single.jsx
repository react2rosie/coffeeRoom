import styles from "./Single.module.css";

import { getImageUrl } from "../../utils";
import React from 'react'
import { SinglePost } from "../../components/SinglePost/SinglePost";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";

export const Single = () => {
    return (
        <>
            <Navbar />
            <div className={styles.single}>
                <SinglePost />
                <Sidebar />
            </div>
            <Footer />
        </>
    )
}
