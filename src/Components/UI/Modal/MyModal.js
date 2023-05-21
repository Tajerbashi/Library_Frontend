import React from "react";
import './MyModal.css'
const MyModal = (props) => {
    return (
        <div className="myModal">
            {props.children}
        </div>
    );
}
export default MyModal;