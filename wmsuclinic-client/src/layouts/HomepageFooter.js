
import React from "react";
import { Container, Row } from "reactstrap";

import PropTypes from "prop-types";

class HomepageFooter extends React.Component {
    render() {
        return (
            <footer className="footer">
                <Container fluid={this.props.fluid ? true : false}>
                    <Row>
                        <nav className="footer-nav">
                            <ul>
                                <li>
                                    <a href="#Wmsu" target="_blank"> WMSU CLINIC</a>
                                </li>
                                <li>
                                    <a href="#Blog" target="_blank"> Blog </a>
                                </li>
                                <li>
                                    <a href="#Lincenses" target="_blank"> Licenses</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="credits ml-auto">
                            <div className="copyright">
                                &copy; {1900 + new Date().getYear()}, made with{" "}
                                <i className="i" /> by Debug.Go
                             </div>
                        </div>
                    </Row>
                </Container>
            </footer>
        );
    }
}

HomepageFooter.propTypes = {
    default: PropTypes.bool,
    fluid: PropTypes.bool
};

export default HomepageFooter;
