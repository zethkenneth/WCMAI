import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    Dropdown
  } from 'reactstrap';

class NavbarAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            dropdownOpen: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    dropdownToggle(e) {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }
    
    render() { 
        return ( 
            <Navbar color="primary" expand="lg" className="navbar-absolute fixed-top ">
                <Container fluid>
                    <div className="navbar-wrapper">
                        <div className="navbar-toggle">
                            <button type="button" className="navbar-toggler">
                                <span className="navbar-toggler-bar bar1"></span>
                                <span className="navbar-toggler-bar bar2"></span>
                                <span className="navbar-toggler-bar bar3"></span>
                            </button>
                        </div>
                        <a className="navbar-brand" href="/#">Paper Dashboard 2</a>
                    </div>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                    </button> */}
                    <NavbarToggler onClick={this.toggle}>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                    </NavbarToggler>
                    <Collapse
                        isOpen={this.state.isOpen}
                        navbar
                        className="justify-content-end"
                    >
                        <form>
                            <InputGroup className="no-border">
                                <Input placeholder="Search..." />
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="nc-icon nc-zoom-split" />
                                    </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </form>
                        <Nav navbar>
                            {/* <NavItem>
                                <Link to="#" className="nav-link btn-magnify">
                                    <i className="nc-icon nc-layout-11"></i>
                                    <p>
                                        <span className="d-lg-none d-md-block">Stats</span>
                                    </p>
                                </Link>
                            </NavItem> */}
                            <Dropdown nav isOpen={this.state.dropdownOpen} toggle={e => this.dropdownToggle(e)}>
                                <DropdownToggle caret nav>
                                    <i className="nc-icon nc-bell-55"></i>
                                    <p>
                                        <span className="d-lg-none d-md-block">Some Actions</span>
                                    </p>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem tag="a">Action</DropdownItem>
                                    <DropdownItem tag="a">Another Action</DropdownItem>
                                    <DropdownItem tag="a">Something else here</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <NavItem>
                                <Link to="/#" className="nav-link btn-rotate">
                                    <i className="nc-icon nc-settings-gear-65"></i>
                                    <p>
                                        <span className="d-lg-none d-md-block">Account</span>
                                    </p>
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}
 
export default NavbarAdmin;