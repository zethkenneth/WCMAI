import React, {Fragment} from "react";
import { Container } from 'reactstrap';

import Hompage from "../layouts/HomepageContent";
import Hompagefooter from "../layouts/HomepageFooter";
import HompageNavbar from "../layouts/HomepageNavbar";

const Homepage = () => {
    return (
        <Fragment>
            <HompageNavbar />
            <Container> <Hompage/>
         <Hompagefooter/></Container>
        
        </Fragment>
    );
};


export default Homepage;