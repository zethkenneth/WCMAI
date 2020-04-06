import React, {Fragment} from "react";
import { Container } from 'reactstrap';

import Hompage from "../layouts/HomepageContent";
import Hompagefooter from "../layouts/HomepageFooter";
import HompageNavbar from "../layouts/HomepageNavbar";

const Homepage = (props) => {
    alert(props.isAuthenticated);
    return (
        <Fragment>
            <HompageNavbar />
            <Container> 
                <Hompage {...props}/>
                <Hompagefooter/>
            </Container>
        
        </Fragment>
    );
};


export default Homepage;