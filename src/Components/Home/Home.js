import { useState } from "react";
import Header from "./Container/Header/Header";
import Navbar from "./Container/Navbar/Navbar";
import Aside from "./Container/Aside/Aside";
import Section from "./Container/Section/Section";
import Footer from "./Container/Footer/Footer";
import Modal from "../UI/Modal/Modal";
import './Home.css'
const Home = () => {
    const [modal, setModal] = useState(false);
    
    const modalHandler = () => {
        console.log("Show Handler :", modal);
        console.log("Set Modal :", setModal);
        setModal(false);
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Header />
                </div>
                <div className="col-12">
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
            <Modal
                show={modal}
                showHandler={() => modalHandler()}
            >
            </Modal>
            
        </div>
    );
}
export default Home;