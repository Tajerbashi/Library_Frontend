import ReactDOM from "react-dom";
import App from './App'
// in index.js just import App component because it's will be the parent component and all components will be children of App component so import in App.js component

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


ReactDOM.render(<App />, document.getElementById("root"))