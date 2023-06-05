import React from "react";
import './Axios.css'
// import axios from 'axios';
import axios from './../../Services/Order/orderServices';

import Post from './Post/Post'
import FullPost from "./FullPost/FullPost";
import NewPost from "./NewPost/NewPost";

class Axios extends React.Component {
    state = {
        posts: [],
        fullPost: {
            title: 'عنوان',
            author: 'موضوع',
        }
    }
    componentDidMount() { // useEffect Hook
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then((res) => {
                // console.log(res.data);
                this.setState({ posts: res.data });
            })
            .catch((err) => {
                // console.log(err);
            });
    }
    UpdateFullPost(id) {
        const data = this.state.posts.find((post) => post.id === id);
        const newData = {
            title: data.title,
            author: data.body
        }
        this.setState({ fullPost: newData });

    }
    ClearFullPost() {
        const newData = {
            title: 'عنوان',
            author: 'سازنده'
        }
        this.setState({ fullPost: newData });
    }
    SaveProductHandler() {
        console.log("Clicked");
    }
    render() {

        const Posts = this.state.posts.map(item => {
            return (<Post
                key={item.id}
                Title={'کامران'}
                Author={item.body}
                Click={() => this.UpdateFullPost(item.id)} />)
        });
        return (

            <div className="axios">
                <section className="posts-container">
                    {Posts}
                </section>
                <section className="fullPost-container">
                    <FullPost
                        Title={this.state.fullPost.title}
                        Content={this.state.fullPost.author}
                        Click={() => this.ClearFullPost()}
                    />
                </section>
                <section className="newPost-container">
                    <NewPost
                        SaveProduct={() => this.SaveProductHandler()}
                    />
                </section>
            </div>
        );
    }
}
export default Axios;