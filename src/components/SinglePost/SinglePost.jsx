import styles from "./SinglePost.module.css";

import { getImageUrl } from "../../utils";
import React from 'react'
import { Link } from "react-router-dom";

export const SinglePost = () => {
    const user = true
    return (
        <div className={styles.singlePost}>
            <div className={styles.postWrapper}>
                <img src={getImageUrl("blog/jk.jpg")} alt="modern room" className={styles.postImg} />
                <h1>
                    Lorem ipsum dolores
                    <div className={styles.edit}>
                        <i className="fi fi-rr-edit"></i>
                        <i className="fi fi-rr-trash"></i>
                    </div>
                </h1>
                <div className={styles.info}>
                    <p>Author: <b>Rosie</b></p>
                    <p>1 hour ago</p>
                </div>
                <p className={styles.des}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, aspernatur suscipit? Nulla officia doloremque minima et deserunt laborum, illum expedita autem esse id omnis corrupti quo magni, perspiciatis numquam nemo. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, aspernatur suscipit? <br /> Nulla officia doloremque minima et deserunt laborum, illum expedita autem esse id omnis corrupti quo magni, perspiciatis numquam nemo. <br />
                    Nulla officia doloremque minima et deserunt laborum, illum expedita autem esse id omnis corrupti quo magni, perspiciatis numquam nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, aspernatur suscipit? Nulla officia doloremque minima et deserunt laborum, illum expedita autem esse id omnis corrupti quo magni, perspiciatis numquam nemo.<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, aspernatur suscipit? Nulla officia doloremque minima et deserunt laborum, illum expedita autem esse id omnis corrupti quo magni, perspiciatis numquam nemo.
                    Nulla officia doloremque minima et deserunt laborum, illum expedita autem esse id omnis corrupti quo magni, perspiciatis numquam nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Beatae, aspernatur suscipit? Nulla officia doloremque minima et deserunt laborum, illum expedita autem esse id omnis corrupti quo magni, perspiciatis numquam nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, aspernatur suscipit? Nulla officia doloremque minima et deserunt laborum, illum expedita autem esse id omnis corrupti quo magni, perspiciatis numquam nemo.
                    Nulla officia doloremque minima et deserunt laborum, illum expedita autem esse id omnis corrupti quo magni, perspiciatis numquam nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Beatae, aspernatur suscipit? Nulla officia doloremque minima et deserunt laborum, illum expedita autem esse id omnis corrupti quo magni, perspiciatis numquam nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Beatae, aspernatur suscipit? Nulla officia doloremque minima et deserunt laborum, illum expedita autem esse id omnis corrupti quo magni, perspiciatis numquam nemo.
                    Nulla officia doloremque minima et deserunt laborum, illum expedita autem esse id omnis corrupti quo magni, perspiciatis numquam nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Beatae, aspernatur suscipit? Nulla officia doloremque minima et deserunt laborum, illum expedita autem esse id omnis corrupti quo magni, perspiciatis numquam nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, aspernatur suscipit? Nulla officia doloremque minima et deserunt laborum, illum expedita autem esse id omnis corrupti quo magni, perspiciatis numquam nemo.<br />
                    Nulla officia doloremque minima et deserunt laborum, illum expedita autem esse id omnis corrupti quo magni, perspiciatis numquam nemo.
                </p>
                <div className={styles.lower}>
                    <div className={styles.cat}>
                        <p>K-pop</p>
                        <p>Fashion</p>
                    </div>
                    <div className={styles.likes}>
                        <p><i className="fi fi-ss-heart"></i>37</p>
                    </div>
                </div>

            </div>



            {user ? (<div className={styles.comment}><div className={styles.name}>
                <p>Signed in as:</p>
                <Link to="/settings"><img src={getImageUrl("icons/mirrorg.png")} alt="Hero" className={styles.avatar} width={25} /></Link>
                <p>@user3</p>
            </div>
                <form>
                    <textarea name="" id="" cols="30" rows="3" maxLength={200} placeholder="Add a comment..."></textarea>
                    <div className={styles.bottom}>
                        <p>200 characters remaining</p>
                        <button type="submit">Send</button>
                    </div>
                </form></div>)
                : (<div className={styles.comments}>
                    <p>You must be signed in to comment. <Link to="/register" className={styles.sign}> Sign in</Link ></p>
                </div>
                )
            }

            <div className={styles.comments}>
                <div className={styles.head}>
                    <h4>Comments</h4>
                    <p>4</p>
                </div >
                <div className={styles.one}>
                    <img src={getImageUrl("icons/mirrorg.png")} alt="Hero" className={styles.avatar} />
                    <div className={styles.text}>
                        <div><p>@user3</p>
                            <p>7 hours ago</p></div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio architecto minima a ex.</p>
                    </div>
                </div >
                <div className={styles.one}>
                    <img src={getImageUrl("icons/mirrorg.png")} alt="Hero" className={styles.avatar} />
                    <div className={styles.text}>
                        <div><p>@user3</p>
                            <p>7 hours ago</p></div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div >
                <div className={styles.one}>
                    <img src={getImageUrl("icons/mirrorg.png")} alt="Hero" className={styles.avatar} />
                    <div className={styles.text}>
                        <div><p>@user3</p>
                            <p>7 hours ago</p></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit.</p>
                    </div>
                </div >
                <div className={styles.one}>
                    <img src={getImageUrl("icons/mirrorg.png")} alt="Hero" className={styles.avatar} />
                    <div className={styles.text}>
                        <div><p>@user3</p>
                            <p>7 hours ago</p></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quaerat ipsa at debitis dolorum, tempora non, sunt, voluptas optio doloribus tenetur!</p>
                    </div>
                </div >
            </div >

        </div >

    )
}
