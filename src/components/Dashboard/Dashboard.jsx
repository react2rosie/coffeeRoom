import styles from "./Dashboard.module.css";

import { getImageUrl } from "../../utils";

import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";

export const Dashboard = () => {

    const [posts, setPosts] = useState([
        { id: 1, date: '2024-04-08', image: '/assets/blog/jk.jpg', title: 'Post 1', category: 'K-pop', likes: 54, comments: 29 },
        { id: 2, date: '2024-04-07', image: '/assets/blog/wtable.png', title: 'Post 2', category: 'Hollywood', likes: 29, comments: 10 },
        { id: 3, date: '2024-04-08', image: '/assets/blog/blog6.png', title: 'Post 3', category: 'Recipe', likes: 71, comments: 34 },
        { id: 4, date: '2024-04-10', image: '/assets/blog/bedroom.png', title: 'Post 4', category: 'K-pop', likes: 45, comments: 28 },
        { id: 5, date: '2024-04-09', image: '/assets/blog/blogtable.png', title: 'Post 5', category: 'Beauty DIY', likes: 19, comments: 3 },
        { id: 6, date: '2024-04-10', image: '/assets/blog/placeholder.png', title: 'Post 6', category: 'Fashion', likes: 49, comments: 20 }
    ]);

    const deletePost = (postId) => {
        setPosts(posts.filter(post => post.id !== postId));
    };

    return (
        <div className={styles.all}>
            <div className={styles.menuwrap}>

                <div className={styles.menu}>
                    <ul>
                        <Link to="/profile"><li><i className="fi fi-rr-user"></i>Profile</li></Link>
                        <Link to="/dashboard"><li><i className="fi fi-rr-stats"></i>Dashboard</li></Link>
                        <li className={styles.leave}><i className="fi fi-rr-leave"></i>Log out</li>
                    </ul>
                </div>

                <div className={styles.dash}>

                    <table>
                        <thead>
                            <tr>
                                <th>Date Updated</th>
                                <th>Post Image</th>
                                <th>Post Title</th>
                                <th>Category</th>
                                <th>Likes</th>
                                <th>Comments</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map(post => (
                                <tr key={post.id} className="post-row">
                                    <td>{post.date}</td>
                                    <td><img src={post.image} alt={post.title} width={100} height={50} style={{ cursor: "pointer" }} /></td>
                                    <td> <p style={{ cursor: "pointer", fontSize: "16px" }}>{post.title}</p></td>
                                    <td> <p style={{ cursor: "pointer", fontSize: "16px" }}>{post.category}</p></td>
                                    <td>{post.likes}</td>
                                    <td>{post.comments}</td>
                                    <td className={styles.delete}><button onClick={() => deletePost(post.id)} >Delete</button></td>
                                    <td className={styles.edit}><button >Edit</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div >
            <Footer />

        </div>
    )
}
