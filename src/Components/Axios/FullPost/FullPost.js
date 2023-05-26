import React from 'react';

import './FullPost.css'

const FullPost = (props) => {
    let post = <p>لطفا پست مورد نظر را انتخاب کنید</p>
    post = (
        <div className='fullPost'>
            <h3>{props.Title}</h3>
            <h6>{props.Content}</h6>
            <button
                className='post-btn'
                onClick={props.Click}
            >حذف</button>
        </div>
    );
    return post;
}
export default FullPost;