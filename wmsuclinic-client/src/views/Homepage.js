import React, {Fragment} from "react";
import { Container } from 'reactstrap';

import "../assets/css/Homepage.css";
import Hompage from "../layouts/HomepageContent";
import Hompagefooter from "../layouts/HomepageFooter";
import HompageNavbar from "../layouts/HomepageNavbar";

const Homepage = (props) => {
    return (
        <Fragment>
                <HompageNavbar />
                <Hompage {...props} />
                <Hompagefooter />
        </Fragment>
    );
};


export default Homepage;