import React from "react";
import Header from "../../components/Header";
import {Button, ButtonGroup, Form} from "react-bootstrap";
import Footer from "../../components/Footer";
import {withRouter} from "react-router-dom";


class Signup_5 extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.users);
    }

    handleDoneClick = () => {
        const user = this.props.location.data;
        user.setSignUpStep(10);
        this.props.history.push("/success");
    }


    render() {
        return (
            <div>
                <Header link_text="Sign out"/>

                <div className="paymentContainer" style={{textAlign: "center", fontSize: "0.9em"}}>
                    <div style={{marginTop: "125px"}}>
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Lock.png" alt="lock logo"
                             style={{width: "50px", height: "50px"}}
                        />
                    </div>
                    <div style={{marginTop: "25px"}}>
                        <span>STEP 3 OF 3</span>
                        <h3><strong>Set up your payment.</strong></h3>
                    </div>

                    <p>Your membership starts as soon as you set up payment.</p>

                    <h6><strong>No commitments.</strong></h6>
                    <h6><strong>Cancel any time</strong></h6>

                    <div style={{border: "5px solid red", width: "375px", margin: "auto"}}>
                        <a href="#">Credit or Debit Card</a>
                        <br/>
                        <a href="#">Gift Code</a>
                    </div>

                    <Button style={{marginTop: "20px"}} variant="danger"
                            onClick={this.handleDoneClick}>
                        Done
                    </Button>
                </div>

                <Footer/>
            </div>
        )
    }
}

export default withRouter(Signup_5)