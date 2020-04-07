import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() { 
        return (
            <div className="sidebar" data-color="white" data-active-color="danger">
                <div className="logo">
                    <a href="https://www.creative-tim.com" className="simple-text logo-mini">
                        <div className="logo-image-small">
                            <img src="../assets/img/logo-small.png" alt="Logo" />
                        </div>
                        {/* <p>CT</p> */}
                    </a>
                    <a href="https://www.creative-tim.com" className="simple-text logo-normal">
                        Creative Tim
                        {/* <div className="logo-image-big">
                            <img src="../assets/img/logo-big.png">
                        </div> */}
                    </a>
                </div> 
                {/* // logo */}
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="active ">
                            <Link to="/admin/dashboard">
                                <i className="nc-icon nc-bank"></i>
                                <p>Dashboard</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/patienttrans">
                                <i className="nc-icon nc-single-02"></i>
                                <p>Patient Transaction</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="./map.html">
                                <i className="nc-icon nc-badge"></i>
                                <p>Patient Records</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="./notifications.html">
                                <i className="nc-icon nc-tile-56"></i>
                                <p>Inventory</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/settings">
                                <i className="nc-icon nc-settings-gear-65"></i>
                                <p>Settings</p>
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="./tables.html">
                                <i className="nc-icon nc-tile-56"></i>
                                <p>Table List</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="./typography.html">
                                <i className="nc-icon nc-caps-small"></i>
                                <p>Typography</p>
                            </Link>
                        </li>
                        <li className="active-pro">
                            <Link to="./upgrade.html">
                                <i className="nc-icon nc-spaceship"></i>
                                <p>Upgrade to PRO</p>
                            </Link>
                        </li> */}
                    </ul>
                </div>
                {/* // sidebar-wrapper */}
            </div>
        );
    }
}
 
export default Sidebar;