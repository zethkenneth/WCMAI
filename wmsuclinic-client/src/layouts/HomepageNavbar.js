import React from 'react';

import { Button } from 'reactstrap';

import wmsu from '../assets/img/wmsu.png';


import LoginModal from '../LoginModal/LoginModal';

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
                    <ul className="navbar-nav ml-auto text-right">
                        <li className="nav-item active">
                            <div className="nav-link" >Home <span className="sr-only">(current)</span></div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" >About Us</div>
                        </li>
                        <li className="nav-item">
                            {/* <Link to="/login" type="button" className="btn btn-outline-primary">Log In </Link>} */}
                            <Button onClick={this.toggleModal}>Login</Button>
                            { <LoginModal opened={this.state.showModal} toggle={this.toggleModal} />}
                        </li>
                    </ul>
                </div>
            </nav>
        );
    };
}

export default HomepageNavbar;