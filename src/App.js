// It's important component because it is the main component of the react project
import './App.css'
import Product from "./Components/Product/Product"
const App = () => {
    return (
        <div id="app" className="container">
            <Product title="Book"/>
            <Product title="Computer"/>
            <Product title="Iphone"/>
        </div>
    )
}

export default App