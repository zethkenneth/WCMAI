import React, { Component } from 'react';
import { Row, Col, Card, CardTitle, CardHeader, CardBody, CardFooter } from 'reactstrap';


class DashboardContent extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="content">
                    <Row>
                        <Col lg="3" md="6" sm="6">
                            <Card className="card-stats">
                                <CardBody>
                                    <Row>
                                        <Col xs="5" md="4">
                                            <div className="icon-big text-center icon-warning">
                                                <i className="nc-icon nc-globe text-warning"></i>
                                            </div>
                                        </Col>
                                        <Col xs="7" md="8">
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
                        </Col>
                        <Col lg="3" md="6" sm="6">
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
                        </Col>
                        <Col lg="3" md="6" sm="6">
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
                        </Col>
                        <Col lg="3" md="6" sm="6">
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
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h5">Users Behavior</CardTitle>
                                    <p className="card-category">24 Hours performance</p>
                                </CardHeader>
                                <CardBody>
                                    <canvas id="chartHours" width="400" height="100"></canvas>
                                </CardBody>
                                <CardFooter>
                                    <hr />
                                    <div className="stats">
                                        <i className="fa fa-history"></i> Updated 3 minutes ago
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4">
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h5">Email Statistics</CardTitle>
                                    <p className="card-category">Last Campaign Performance</p>
                                </CardHeader>
                                <CardBody>
                                    <canvas id="chartEmail"></canvas>
                                </CardBody>
                                <CardFooter>
                                    <div className="legend">
                                        <i className="fa fa-circle text-primary"></i> Opened
                                        <i className="fa fa-circle text-warning"></i> Read
                                        <i className="fa fa-circle text-danger"></i> Deleted
                                        <i className="fa fa-circle text-gray"></i> Unopened
                                    </div>
                                    <hr />
                                    <div className="stats">
                                        <i className="fa fa-calendar"></i> Number of emails sent
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md="8">
                            <Card className="card-chart">
                                <CardHeader>
                                    <CardTitle tag="h5">NASDAQ: AAPL</CardTitle>
                                    <p className="card-category">Line Chart with Points</p>
                                </CardHeader>
                                <CardBody>
                                    <canvas id="speedChart" width="400" height="100"></canvas>
                                </CardBody>
                                <CardFooter>
                                    <div className="chart-legend">
                                        <i className="fa fa-circle text-info"></i> Tesla Model S
                                        <i className="fa fa-circle text-warning"></i> BMW 5 Series
                                    </div>
                                    <hr />
                                    <div className="card-stats">
                                        <i className="fa fa-check"></i> Data information certified
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </div>
                
            </React.Fragment>
        );
    }
}
 
export default DashboardContent;