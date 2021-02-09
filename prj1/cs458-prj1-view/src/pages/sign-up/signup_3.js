import React from 'react';
import {Button} from 'react-bootstrap'
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Signup_3() {

    return (
        <div style={{textAlign: "center"}}>
            <Header/>
            <div className="planContainer">
                <div style={{marginTop: "125px"}}>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png" alt="logo"
                    style={{width: "50px", height: "50px"}}
                    />
                </div>
                <div style={{marginTop: "25px"}}>
                    <span>STEP 1 OF 3</span>
                    <h3>Choose your plan</h3>
                </div>
                <div style={{marginTop: "25px", textAlign: "center"}}>
                    <ul style={{width: "20%", margin: "auto", paddingLeft: "0px", textAlign: "left"}}>
                        <li>No commitments, cancel anytime.</li>
                        <li>Everything on Netflix for one low price.</li>
                        <li>Unlimited viewing on all your devices.</li>
                    </ul>
                </div>
                <div style={{marginTop:"25px"}}>
                    <Button variant="danger" style={{width: "25%"}}>See the plans</Button>
                </div>

            </div>
            <Footer/>
        </div>
)

}