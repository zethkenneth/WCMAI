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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                
                <div className="navbar-brand" >
                    <img src={wmsu} width="30" height="30" className="d-inline-block align-top" alt="..." /><strong> Western Mindanao State University </strong>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto text-right text-black">
                        <li className="nav-item active">
                            <a href="#" className="nav-link" >Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a href="#" className="nav-link" >About Us</a> 
                        </li>
                        <li className="nav-item active">
                            <a href="#" className="nav-link" >Log in</a> 
                        </li>
                    </ul>
                </div>
            </nav>
        );
    };
}

export default HomepageNavbar;