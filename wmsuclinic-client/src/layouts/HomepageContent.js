import React from 'react';
import med from '../assets/img/med.png';

import {
  Row,
  Col
} from "reactstrap";
// core components


const HomepageContent = () => {
    return (
        <div>
            <div className="content">
                <Row>
                    <Col>
                        <div>
                            <h1><strong>WMSU CLINIC</strong> MONITORING AND INVENTORY SYSTEM</h1>
                            <p>a web-based clinic system is developed to support the Health Service Center daily operation which is done manually before. This system will involve some of the clinic operation that starts from patient’s registration until giving of medicines. The important thing is it will become easier for the data record and retrieval because of its online and offline database. This system will be able to generate reports regarding the clinic operation, monthly. For example, the number of patients per day and the number of patients diagnosed for a certain illness for the whole month. This system also has notifiable inventory system for the medicines. </p>
                        </div>
                    </Col>
                    <Col>
                        <img src={med} className="feature-img" alt="med" />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default HomepageContent;