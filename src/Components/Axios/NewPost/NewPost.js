import React from 'react';
import './NewPost.css'

class NewPost extends React.Component {
    state = {
        title: '',
        content: '',
        author: ''
    }
    componentDidMount(){
    }
    render() {
        return (
            <div className='NewPost'>
                <h5>ایجاد پست جدید</h5>
                <div className='NewPost-row'>
                    <p>عنوان</p>
                    <input
                        type='text'
                        value={this.state.title}
                        onChange={(event) => this.setState({title: event.target.value})}
                        className='New-Post-Input'
                        placeholder='عنوان را وارد کنید ...'
                    />
                </div>

                <div className='NewPost-row'>
                    <p>محتوا</p>
                    <textarea
                        value={this.state.content}
                        onChange={(event) => this.setState({content: event.target.value})}
                        rows="4"
                    ></textarea>
                </div>

                <div className='NewPost-row'>
                    <p>سازنده</p>
                    <select
                    value={this.state.author}
                    onChange={(event) => this.setState({author: event.target.value})}
                    >
                        <option>مسعود</option>
                        <option>محمد</option>
                        <option>عنوان</option>
                    </select>
                </div>
                <button className='NewPost-btn'>ذخیره</button>
            </div>
        );
    };
}
export default NewPost;