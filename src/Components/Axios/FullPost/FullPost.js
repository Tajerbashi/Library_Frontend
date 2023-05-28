import React, { useEffect } from 'react';
import axios from 'axios';
import './FullPost.css'

const FullPost = (props) => {
    // const state = {
    //     loadedPost: null
    // }
    // useEffect(() => {
    //     if (props.id) {
    //         const id = props.id;
    //         const data = axios
    //             .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //             .then(res => {
    //                 console.log(res.data);
    //                 this.state.loadedPost = res.data;
    //             }).catch((err) => {
    //                 console.log(err);
    //             });
    //     }

    // }, ...[]);
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