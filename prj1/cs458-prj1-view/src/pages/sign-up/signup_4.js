import React from 'react';
import {Button, ButtonGroup, Form} from 'react-bootstrap'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {withRouter} from "react-router-dom";

class Signup_4 extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.users);
        this.state = {plan: "", notChosen: false}
    }

    handleContinueClick = (event) => {
        if(this.state.plan.trim() === ""){
            this.setState({notChosen: true});
            event.preventDefault();
        }
        else {
            const user = this.props.location.data;
            user.setSignUpStep(5);
            this.props.history.push({
                pathname: "/sign-up5",
                data: user
            });
        }
    }

    handleChoiceClick = (event) => {
        this.setState({notChosen: false});
        this.setState({
            plan: event.target.innerHTML
        })
    }


    render() {
        return (
            <div>
                <Header link_text="Sign out"/>
                <div style={{margin: "auto", width: "50%"}}>
                    <div style={{marginLeft: "250px", marginTop: "150px", marginBottom: "50px", fontSize: "1em"}}>
                        <div className="stepHeader-container" data-uia="header">
                            <div><span>STEP <b>2</b> OF <b>3</b></span>
                                <h4>Choose the plan that’s right for you</h4>
                            </div>
                        </div>
                        <div>Downgrade or upgrade at any time.</div>
                    </div>

                    <div className="choices" style={{marginLeft: "250px"}}>
                        <ButtonGroup style={{height: "100px", width: "210px"}}>
                            <div id="basic_button">
                                <Button variant="danger" style={{marginRight: "25px", padding: "25px"}} id="premium_basic"
                                        onClick={this.handleChoiceClick}>Basic</Button>
                                <span>17.99 TL</span>
                            </div>

                            <div id="standard_button">
                                <Button variant="danger" style={{marginRight: "25px", padding: "25px"}} id="premium_standard"
                                        onClick={this.handleChoiceClick}>Standard</Button>
                                <span>29.99 TL</span>
                            </div>

                            <div>
                                <Button variant="danger" style={{padding: "25px"}} id="premium_button"
                                        onClick={this.handleChoiceClick}>Premium</Button>
                                <span>41.99 TL</span>
                            </div>

                        </ButtonGroup>
                    </div>
                    {
                        this.state.notChosen &&
                        <span style={{color: "orange", fontSize: "1em", marginLeft: "250px"}}>
                                        One of the options need to be chosen!
                                            </span>
                    }

                    <div style={{marginTop: "25px"}}>
                        <Button variant="danger" style={{width: "375px", marginLeft: "250px"}}
                                onClick={this.handleContinueClick} id="continue_button">Continue</Button>
                    </div>

                    <Footer/>
                </div>
            </div>
        )
    }
}

export default withRouter(Signup_4)