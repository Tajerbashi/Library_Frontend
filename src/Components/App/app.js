import React from "react"
import './app.css'
import MainHeader from '../header/header';
import MainNav from '../nav/nav';
import Product from '../Product/Product';
class App extends React.Component {
    state = {
        products : [
            {title : "Book 1", price:205},
            {title : "Book 2", price:324},
            {title : "Book 3", price:580},
            {title : "Book 4", price:358},
        ],
    };

    ChangeState = () => {
        this.setState({
            products : [
                {title : "Computer Rog Strix", price:3250},
                {title : "Computer Apple Mac Book", price:1250},
                {title : "Iphone 14 Pro Max", price:1400},
                {title : "Apple Watch Ultra Series 8", price:750},
            ],
        });
    };

    render(){
        return (
            <div className='container'>
                <MainHeader />
                <MainNav />
                <div className='container bg-primary bg-gradient p-2 m-2 rounded-3'>
                        <Product
                        name={this.state.products[0].title} 
                        price={this.state.products[0].price}
                        />
                        <Product
                        name={this.state.products[1].title} 
                        price={this.state.products[1].price}
                        />
                        <Product
                        name={this.state.products[2].title} 
                        price={this.state.products[2].price}
                        />
                        <Product
                        name={this.state.products[3].title} 
                        price={this.state.products[3].price}
                        />
                    <button onClick={this.ChangeState}
                            className='btn btn-dark text-light w-100'>
                                Change State
                    </button>
                </div>
            </div>
        );
    }
}

export default App;