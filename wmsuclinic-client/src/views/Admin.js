import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavbarAdmin from '../components/Navbar/NavbarAdmin';
import Sidebar from '../components/Sidebar/Sidebar';
// import Content from '../components/DashboardContent';
import Footer from '../components/Footer/Footer';

import Dashboard2 from '../views/Dashboard';
import Settings from '../views/Settings';


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
                    
                    <Switch>
                        <Route path="/admin/dashboard" component={Dashboard2} />
                        <Route path="/admin/notifications" component={Settings} />
                        {/* <Route path="/admin/icons" component={Icons} />
                        <Route path="/admin/typography" component={Typography} />
                        <Route path="/admin/tables" component={TableList} />
                        <Route path="/admin/maps" component={Maps} />
                        <Route path="/admin/user-page" component={UserPage} />
                        <Route path="/admin/upgrade" component={UpgradeToPro} /> */}

                    </Switch>
                
                    <Footer />

                </div>
                {/* // main-panel */}
            </div>
        );
    }
}
 
export default Dashboard;