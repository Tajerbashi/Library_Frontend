// It's important component because it is the main component of the react project
import './App.css'
import Product from "./Components/Product/Product"
function App(){
    return (
        <div id="app" className="container">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}

export default App