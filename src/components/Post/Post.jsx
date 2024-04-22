import React from 'react'
import styles from "./Post.module.css";

import { getImageUrl } from "../../utils";
import { Link } from 'react-router-dom';

export const Post = () => {
    return (
        <div className={styles.post}><img src={getImageUrl("blog/wtable.png")} alt="modern room" className={styles.postImg} />
            <div className={styles.postInfo}>
                <div className={styles.postTags}>
                    <span className={styles.postTag}>K-pop</span>
                    <span className={styles.postTag}>Fashion</span>
                </div>
                <Link to="/post/abc" ><h3>
                    Lorem ipsum dolor.
                </h3></Link>
                <hr />
                <p>1 hour ago</p>
            </div>
            <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi molestiae nam rem soluta porro similique blanditiis qui cumque cupiditate. Harum nulla optio ea nemo, dolores quis fugit quos et? Et eligendi molestiae nam rem soluta porro similique blanditiis qui cumque cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Harum nulla optio ea nemo, dolores quis fugit quos et?
            </h4>
            <h6><Link to="/post/abc" >Read more</Link></h6>
        </div>
    )
}
