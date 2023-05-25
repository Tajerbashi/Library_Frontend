import React from "react";
import './Axios.css'


import Input from '../UI/Input/Input'
const Axios = (props) => {
    return (
        <div className="axios">
            <h1>{props.Title}</h1>
            <Input
                holder={'نام را وارد کنید ..'}
            />
            <Input
                holder={'نام را وارد کنید ..'}
            />
            <Input
                holder={'نام را وارد کنید ..'}
            />
            <Input
                holder={'نام را وارد کنید ..'}
            />
            <hr />
        </div>
    );
}
export default Axios;