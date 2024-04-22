import React from 'react'
import { Banner } from '../../components/Banner/Banner'
import styles from "./Home.module.css";
import { Posts } from '../../components/Posts/Posts';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';

export const Home = () => {
    return (
        <div className={styles.all}>
            <Navbar />
            <Banner />
            <div className={styles.home}>
                <Posts />
                <Sidebar />
            </div>
            <Footer />
        </div>
    )
}
