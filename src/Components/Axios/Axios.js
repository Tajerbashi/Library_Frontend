import React from "react";
import './Axios.css'

import Post from './Post/Post'
import FullPost from "./FullPost/FullPost";
import NewPost from "./NewPost/NewPost";
const Axios = (props) => {
    return (
        <div className="axios">
            <section className="posts">
                <Post />
                <Post />

            </section>
            <section className="fullPost">
                <FullPost />
            </section>
            <section className="newPost">
                <NewPost />
            </section>
        </div>
    );
}
export default Axios;