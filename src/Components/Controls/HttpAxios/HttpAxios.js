import React from "react";
import './HttpAxios.css'

import Input from "../../UI/Input/Input";

const HttpAxios = (props) => {
    return (
        <div className="axios">
            <h1>{props.Title}</h1>
            <Input
                holder={'نام را وارد کنید ..'}
            />
        </div>
    );
}
export default HttpAxios;