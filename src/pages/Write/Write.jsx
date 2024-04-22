import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css"

import styles from "./Write.module.css";

import { getImageUrl } from "../../utils";

import React from 'react'
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";

export const Write = () => {
    return (
        <div className={styles.all}>
            <Navbar />
            <div className={styles.write}>
                <h1>Write a post</h1>
                <form>
                    <div className={styles.writewrap}>
                        <input type="text" placeholder="Title" required />
                        <select name="category" id="" required >
                            <option value="uncategorized">Select a category</option>
                            <option value="k-pop">K-pop</option>
                            <option value="fashion">Fashion</option>
                            <option value="hollywood">Hollywood</option>
                            <option value="beauty diy">Beauty DIY</option>
                            <option value="recipe">Recipe</option>
                        </select>
                    </div>
                    <div className={styles.addimg}>
                        <input type="file" accept="image/*" />
                        <button>Upload image</button>
                    </div>
                    <ReactQuill theme="snow" style={{ height: "500px", textAlign: "left" }} placeholder="Write something..." />

                </form>
                <button className={styles.done}>Publish<i className="fi fi-rr-check" style={{ paddingLeft: "8px" }}></i></button>
            </div>
            <Footer />
        </div>
    )
}
