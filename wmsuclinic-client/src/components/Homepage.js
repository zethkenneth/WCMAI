import React, {Fragment} from "react";
import { Container } from 'reactstrap';
import med from "../assets/img/med.png";
import Hompage from "../layouts/HomepageContent";
import Hompagefooter from "../layouts/HomepageFooter";
import HompageNavbar from "../layouts/HomepageNavbar";
import {
    Row,
    Col
  } from "reactstrap";
const Homepage = ({setAuth}) => {
    return (
        <Fragment>
            <HompageNavbar />
            <Container> <Hompage/>
         <Hompagefooter/></Container>
        
        </Fragment>
    );
};


export default Homepage;