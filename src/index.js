import React from "react";
import ReactDOM from "react-dom";

const element = React.createElement
(
    'div',
    {id:"app",className:"container"},
    'Welcome to React Application'
);

ReactDOM.render(element, document.getElementById("root"));