import React from 'react';
import {Button} from 'react-bootstrap'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {withRouter} from "react-router-dom";

class Signup_3 extends React.Component {

    constructor(props){
        super(props);
        console.log(props.users);
    }

    handleClick = () => {
        const user = this.props.location.data;
        user.setSignUpStep(4);
        this.props.history.push({
            pathname: "/sign-up4",
            data: user
        });
    }

    render() {
        return (
            <div style={{textAlign: "center"}}>
                <Header link_text="Sign out"/>
                <div className="planContainer">
                    <div style={{marginTop: "125px"}}>
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png" alt="logo"
                             style={{width: "50px", height: "50px"}}
                        />
                    </div>
                    <div style={{marginTop: "25px"}}>
                        <span>STEP 2 OF 3</span>
                        <h3>Choose your plan</h3>
                    </div>
                    <div style={{marginTop: "25px", textAlign: "center"}}>
                        <ul style={{width: "20%", margin: "auto", paddingLeft: "0px", textAlign: "left"}}>
                            <li>No commitments, cancel anytime.</li>
                            <li>Everything on Netflix for one low price.</li>
                            <li>Unlimited viewing on all your devices.</li>
                        </ul>
                    </div>
                    <div style={{marginTop: "25px"}}>
                        <Button variant="danger" style={{width: "25%"}} onClick={this.handleClick} id="seeplans_button">See the plans</Button>
                    </div>

                </div>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(Signup_3)