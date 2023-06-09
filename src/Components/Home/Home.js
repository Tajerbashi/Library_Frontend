import Header from "./Container/Header/Header";
import Navbar from "./Container/Navbar/Navbar";
import Aside from "./Container/Aside/Aside";
import Section from "./Container/Section/Section";
import Footer from "./Container/Footer/Footer";

import './Home.css'
const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div col-12>
                    <Header />
                </div>
                <div>
                    <Navbar />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <Aside />
                </div>
                <div className="col-9">
                    <Section />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
export default Home;