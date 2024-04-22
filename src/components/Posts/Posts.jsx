import styles from "./Posts.module.css";

import { getImageUrl } from "../../utils";

import React from 'react'
import { Post } from "../Post/Post";

export const Posts = () => {
    return (
        <div className={styles.posts}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}
