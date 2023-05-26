import React from "react";
import './Axios.css'

import Post from './Post/Post'
import FullPost from "./FullPost/FullPost";
import NewPost from "./NewPost/NewPost";


const Axios = (props) => {
    return (
        <div className="axios">
            <section className="posts-container">
                <Post
                    Title={'عنوان'}
                    Author={'موضوع'}
                    Click={props.ClickPost}
                />
                <Post
                    Title={'عنوان'}
                    Author={'موضوع'}
                    Click={props.ClickPost}
                />
            </section>
            <section className="fullPost-container">
                <FullPost
                    Title={'عنوان'}
                    Content={'موضوع'}
                    Click={props.CLickFullPost}
                />
            </section>
            <section className="newPost-container">
                <NewPost
                    Click={props.CLickNewPost}
                />
            </section>
        </div>
    );
}
export default Axios;