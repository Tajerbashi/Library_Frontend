import React from "react";
import Wrapper from "../../../Hoc/wrapper";
import BackDrop from "../BackDrop/BackDrop";
import './MyModal.css'
const MyModal = (props) => {
    return (
        <Wrapper>
            <BackDrop show={props.show} showHandler={props.showBackDrop}/>
            <div className="myModal"

                style={
                    {
                        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'
                    }
                }
            >
                {props.children}
            </div>
        </Wrapper>

    );
}
export default MyModal;