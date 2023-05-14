import React from "react";

const Dynamic = ( NameComponent,ClassName ) => {
    return (props) => (
        <div className={ ClassName }>
            < NameComponent />
        </div>
    );
}
export default Dynamic;