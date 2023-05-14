import React from "react";

const Dynamic = ( NameComponent,ClassName ) => {
    return (props) => (
        <div className={ ClassName }>
            < NameComponent {...props}/>
        </div>
    );
}
export default Dynamic;