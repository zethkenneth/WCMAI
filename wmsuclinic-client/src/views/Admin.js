import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from "../routes";

import NavbarAdmin from '../layouts/Navbar/NavbarAdmin';
import Sidebar from '../layouts/Sidebar/Sidebar';
import Footer from '../layouts/Footer/Footer';



class Admin extends Component {
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
                        {routes.map((prop) => {
                            return (
                                <Route
                                    path={prop.layout + prop.path}
                                    component={prop.component}
                                    key={prop.path}
                                />
                            );
                        })}
                    </Switch>
                    
                    {/* <Switch>
                        <Route path="/admin/dashboard" component={Dashboard} />
                        <Route path="/admin/settings" component={Settings} />
                        {/* <Route path="/admin/icons" component={Icons} />
                        <Route path="/admin/typography" component={Typography} />
                        <Route path="/admin/tables" component={TableList} />
                        <Route path="/admin/maps" component={Maps} />
                        <Route path="/admin/user-page" component={UserPage} />
                        <Route path="/admin/upgrade" component={UpgradeToPro} /> 

                    </Switch> */}
                
                    <Footer />

                </div>
                {/* // main-panel */}
            </div>
        );
    }
}
 
export default Admin;