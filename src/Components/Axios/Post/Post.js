import React from 'react';
import './Post.css'

const Post = (props) => {
    return (
        <div className='post' onClick={props.Click}>
            <span className='Title'>{props.Title}</span>
            <span className='Author'>{props.Author}</span>
        </div>
    );
}
export default Post;