import React from 'react';

import { Button } from 'reactstrap';

import wmsu from '../assets/img/wmsu.png';



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
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div class="container">
                    <a class="navbar-brand js-scroll-trigger" href="#page-top"> WMSU CLINIC</a>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">

                                <li class="nav-item">
                                    <a class="nav-link js-scroll-trigger" href="#page-top">Home</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link js-scroll-trigger" href="#about">About</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link js-scroll-trigger" href="#login">Log In</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        );
    };
}

export default HomepageNavbar;