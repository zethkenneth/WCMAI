import React from 'react';

import { Button } from 'reactstrap';


import style from "../assets/css/Homepage.module.css";


class HomepageNavbar extends React.Component {
    constructor(){
        super();
        this.state ={
            showModal: false
        }
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id={style.mainNav}>
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">
                   WMSU CLINIC</a>

                        <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </Button>
                        
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#page-top">Home</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#about">About</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#login">Log In</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        );
    };
}

export default HomepageNavbar;