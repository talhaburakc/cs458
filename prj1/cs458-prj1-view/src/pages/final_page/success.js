import React from 'react';
import {Button} from 'react-bootstrap'
import {withRouter} from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


class Success extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header link_text="Sign in"/>

                <div style={{textAlign: "center", padding: "100px"}}>
                    <h1>Success! You are in Netflix</h1>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default withRouter(Success)