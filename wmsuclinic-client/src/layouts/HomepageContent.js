import React from 'react';
import { Link } from 'react-router-dom';
import med from '../assets/img/med.png';
import LoginModal from '../LoginModal/LoginModal';

import {
  Row,
  Col,
 
} from "reactstrap";
// core components


const HomepageContent = (props) => {
    let login = '';
    alert(props.isAuthenticated);

    if (props.isAuthenticated) {
        login = <Link to="/admin/dashboard" className="btn btn-primary">Go to Dashboard</Link>
    } else {
        login = <LoginModal {...props} />
    }
    
    return (
        <div>
            <div className="content">
                    <Row>
                       <Col id="Introduction">
                                <div className="container text-black" >
                                    <div className="wrapper text-center">
                                        <div className="container" >
                                            <div className="row" >
                                                <div className="col-md-6" >
                                                    <div className="feature-box">
                                                         <h1 > <b>Welcome!</b> </h1>
                                                            <p className="lead" >WMSU CLINIC MONITORING AND INVENTORY SYSTEM is A web-based system developed for the WMSU Health Services Office. This includes the monitoring of patients records and inventory,generating of reports and more.</p>
                                                    </div>
                                                 </div>
                                                <div className="col-md-6">
                                                    <img src={med} className="feature-img" />
                                                 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </Col>
                    </Row>
                     <Row>
                        <Col id="about">
                        </Col>
                     </Row>
                    <Row>
                         <Col>
                            {login}
                        </Col>
                    </Row>
            </div>
        </div>
    );
}

export default HomepageContent;