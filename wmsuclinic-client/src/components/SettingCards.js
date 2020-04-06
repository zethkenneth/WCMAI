import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Card, CardTitle, CardHeader, CardBody, CardFooter } from 'reactstrap';

class SettingCards extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="content">
                    <Row>
                        <Col lg="3" md="6" sm="6">
                            <Link to="#">
                                <Card className="card-stats">
                                    <CardBody>
                                        <Row>
                                            <Col sm="5" md="4">
                                                <div className="icon-big text-center icon-warning">
                                                    <i className="nc-icon nc-globe text-warning"></i>
                                                </div>
                                            </Col>
                                            <Col sm="7" md="8">
                                                <div className="numbers">
                                                    <p className="card-category">Account</p>
                                                    <CardTitle tag="p">0</CardTitle>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter>
                                        <hr />
                                        <div className="stats">
                                            <i className="far fa-user"></i>
                                            View
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Link>
                        </Col>
                        <Col lg="3" md="6" sm="6">
                            <Link to="#">
                                <Card className="card-stats">
                                    <CardBody>
                                        <Row>
                                            <Col sm="5" md="4">
                                                <div className="icon-big text-center icon-warning">
                                                    <i className="nc-icon nc-money-coins text-success"></i>
                                                </div>
                                            </Col>
                                            <Col sm="7" md="8">
                                                <div className="numbers">
                                                    <p className="card-category">Revenue</p>
                                                    <CardTitle tag="p">$ 1,345</CardTitle>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter>
                                        <hr />
                                        <div className="stats">
                                            <i className="fa fa-calendar-o"></i>
                                            Last day
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Link>
                        </Col>
                        <Col lg="3" md="6" sm="6">
                            <Link to="#">
                                <Card className="card-stats">
                                    <CardBody>
                                        <Row>
                                            <Col sm="5" md="4">
                                                <div className="icon-big text-center icon-warning">
                                                    <i className="nc-icon nc-vector text-danger"></i>
                                                </div>
                                            </Col>
                                            <Col sm="7" md="8">
                                                <div className="numbers">
                                                    <p className="card-category">Errors</p>
                                                    <CardTitle tag="p">23</CardTitle>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter>
                                        <hr />
                                        <div className="stats">
                                            <i className="fa fa-clock-o"></i>
                                            In the last hour
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Link>
                        </Col>
                        <Col lg="3" md="6" sm="6">
                            <Link to="#">
                                <Card className="card-stats">
                                    <CardBody>
                                        <Row>
                                            <Col sm="5" md="4">
                                                <div className="icon-big text-center icon-warning">
                                                    <i className="nc-icon nc-favourite-28 text-primary"></i>
                                                </div>
                                            </Col>
                                            <Col sm="7" md="8">
                                                <div className="numbers">
                                                    <p className="card-category">Followers</p>
                                                    <CardTitle tag="p">+45K</CardTitle>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter>
                                        <hr />
                                        <div className="stats">
                                            <i className="fa fa-refresh"></i>
                                            Update now
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Link>
                        </Col>
                        <Col lg="3" md="6" sm="6">
                            <Link to="#">
                                <Card className="card-stats">
                                    <CardBody>
                                        <Row>
                                            <Col sm="5" md="4">
                                                <div className="icon-big text-center icon-warning">
                                                    <i className="nc-icon nc-globe text-warning"></i>
                                                </div>
                                            </Col>
                                            <Col sm="7" md="8">
                                                <div className="numbers">
                                                    <p className="card-category">Capacity</p>
                                                    <CardTitle tag="p">150GB</CardTitle>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter>
                                        <hr />
                                        <div className="stats">
                                            <i className="fa fa-refresh"></i>
                                            Update Now
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Link>
                        </Col>
                        <Col lg="3" md="6" sm="6">
                            <Link to="#">
                                <Card className="card-stats">
                                    <CardBody>
                                        <Row>
                                            <Col sm="5" md="4">
                                                <div className="icon-big text-center icon-warning">
                                                    <i className="nc-icon nc-globe text-warning"></i>
                                                </div>
                                            </Col>
                                            <Col sm="7" md="8">
                                                <div className="numbers">
                                                    <p className="card-category">Capacity</p>
                                                    <CardTitle tag="p">150GB</CardTitle>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter>
                                        <hr />
                                        <div className="stats">
                                            <i className="fa fa-refresh"></i>
                                            Update Now
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Link>
                        </Col>
                        <Col lg="3" md="6" sm="6">
                            <Link to="#">
                                <Card className="card-stats">
                                    <CardBody>
                                        <Row>
                                            <Col sm="5" md="4">
                                                <div className="icon-big text-center icon-warning">
                                                    <i className="nc-icon nc-globe text-warning"></i>
                                                </div>
                                            </Col>
                                            <Col sm="7" md="8">
                                                <div className="numbers">
                                                    <p className="card-category">Capacity</p>
                                                    <CardTitle tag="p">150GB</CardTitle>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter>
                                        <hr />
                                        <div className="stats">
                                            <i className="fa fa-refresh"></i>
                                            Update Now
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Link>
                        </Col>
                        <Col lg="3" md="6" sm="6">
                            <Link to="#">
                                <Card className="card-stats">
                                    <CardBody>
                                        <Row>
                                            <Col sm="5" md="4">
                                                <div className="icon-big text-center icon-warning">
                                                    <i className="nc-icon nc-globe text-warning"></i>
                                                </div>
                                            </Col>
                                            <Col sm="7" md="8">
                                                <div className="numbers">
                                                    <p className="card-category">Capacity</p>
                                                    <CardTitle tag="p">150GB</CardTitle>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter>
                                        <hr />
                                        <div className="stats">
                                            <i className="fa fa-refresh"></i>
                                            Update Now
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                    
                </div>
                
            </React.Fragment>
        );
    }
}
 
export default SettingCards;