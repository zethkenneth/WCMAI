import React, {Fragment, useState, useEffect } from "react";

const Dashboard = ({setAuth}) => {

    const [name , setName] = useState("");
    
    
    async function getName() {
        try {
            const response = await fetch("http://localhost:5000/dashboard", {
                method: "GET",
                headers: { token: localStorage.token}


            });

            const parseRes =  await response.json();
            console.log(parseRes);
        } catch (err) {
            console.error(err.message);
        }
    }


    return (
        <Fragment>
            <h1>Dashboard</h1>
        </Fragment>
    );
};


export default Dashboard;