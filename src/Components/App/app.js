import './app.css'
import MainHeader from '../header/header';
import MainNav from '../nav/nav';
import Product from '../Product/Product';
const App = () => {
    return (
        <div className='container'>
            <MainHeader />
            <MainNav />
            <div className='container bg-dark bg-gradient p-2 m-2 rounded-3'>
                <Product name="Harry Potter" price="89"/>
                <Product name="Fast And Dark" price="25"/>
                <Product name="Control Machine" price="89"/>
            </div>
        </div>
    );
}

export default App;