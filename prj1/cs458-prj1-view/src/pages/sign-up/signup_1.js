import React from 'react';
import {Button} from 'react-bootstrap'
import {useHistory} from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


export default function Signup_1() {

    const history = useHistory();

    const routeChange = () => {
        let path = `/sign-up2`;
        history.push(path);
    }

    return (

        <div>
            <Header link_text="Sign in"/>

            <div className="text-center">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png" alt="step logo"/>
                <div className="body_text">
                    <p>Step 1 of 3</p>
                    <h3>Finish setting up your account</h3>
                    <p>Netflix is personalized for you. Create a password to watch Netflix on any device at any
                        time.</p>
                </div>
                <Button onClick={routeChange} variant="danger">Continue</Button>

            </div>

            <Footer/>

        </div>
    );
}