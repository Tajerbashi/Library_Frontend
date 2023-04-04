import React from "react";
import ReactDOM from "react-dom";


// -------------------  Older Version of React -------------------
// const element = React.createElement
// (
//         'div',
//         {id:"app",className:"container"},
//         'Welcome to React Application'
//     );

// -------------------  New Version of React -------------------
// const element = <div id="app" className="container">Welcome to React Application</div>
// ReactDOM.render(element, document.getElementById("root"));

function App(){
    return (
        <div id="app" className="container">
            App is a Component
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))