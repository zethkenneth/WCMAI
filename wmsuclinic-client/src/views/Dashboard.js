import React, { Component } from 'react';

import NavbarAdmin from '../components/Navbar/NavbarAdmin';
import Sidebar from '../components/Sidebar/Sidebar';
import Content from '../components/DashboardContent';
import Footer from '../components/Footer/Footer';


class Dashboard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="wrapper ">
                <Sidebar />
                
                <div className="main-panel">
                    {/* Navbar */}
                    <NavbarAdmin />
                    {/* End Navbar */}
                    
                    <Content />
                
                    <Footer />

                </div>
                {/* // main-panel */}
            </div>
        );
    }
}
 
export default Dashboard;