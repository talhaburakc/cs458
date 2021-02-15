import React from 'react';
import {Button} from 'react-bootstrap'
import {withRouter} from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


class Signup_1 extends React.Component {
    constructor(props) {
        super(props);
    }

    routeChange = () => {
        let path = `/sign-up2`;
        this.props.history.push(path);
    }

    render() {
        return (

            <div>
                <Header link_text="Sign in"/>

                <div className="text-center">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png"
                         alt="step logo"/>
                    <div className="body_text">
                        <p>Step 1 of 3</p>
                        <h3>Finish setting up your account</h3>
                        <p>Netflix is personalized for you. Create a password to watch Netflix on any device at any
                            time.</p>
                    </div>
                    <Button onClick={this.routeChange} variant="danger" id="continue_button">Continue</Button>

                </div>

                <Footer/>

            </div>
        );
    }
}

export default withRouter(Signup_1)