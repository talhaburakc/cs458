import React from 'react';
import {Button, Form} from 'react-bootstrap'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {useHistory, withRouter} from "react-router-dom";


class Signup_2 extends React.Component {
    constructor(props) {
        super(props);

        this.handleEmailChange = this.handleEmailChange.bind(Signup_2)
        this.handlePasswordChange = this.handlePasswordChange.bind(Signup_2)
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(Signup_2)
        this.handleContinueClick = this.handleContinueClick.bind(Signup_2)

        this.state = {email: '', checkbox: false, password: ''}

    }


    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    }
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    }
    handleCheckBoxChange = (e) => {
        this.setState({checkbox: e.target.value});
    }

    handleContinueClick = (e) => {
        let path = `/sign-up3`;

        this.props.history.push(path);
    }

    render() {
        return (
            <div>
                <Header link_text="Sign in"/>

                <div style={{marginTop: "15px"}}>
                    <div className="w-25" style={{margin: "auto"}}>
                        <div>
                            <span id="" className="stepIndicator" data-uia="">STEP <b>1</b> OF <b>3</b></span>
                            <h1 className="stepTitle" data-uia="stepTitle">Create a password to start your
                                membership.</h1>
                        </div>

                        <div>
                            <div className="contextRow" data-uia="contextRowDone">Just a few more steps and you're done!
                            </div>
                            <div className="contextRow" data-uia="contextRowPaperWork">We hate paperwork, too.</div>
                            <br/>

                            <Form>
                                <Form.Group>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={this.state.email}
                                                  onChange={this.handleEmailChange}/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={this.state.password}
                                                  onChange={this.handlePasswordChange}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Check type="checkbox" label="Please do not email me Netflix special offers."
                                                value={this.state.checkbox} onChange={this.handleCheckBoxChange}/>
                                </Form.Group>
                                <Button variant="danger" type="submit" className="w-100" onClick={this.handleContinueClick}>
                                    Continue
                                </Button>
                            </Form>
                        </div>
                    </div>

                </div>

                <Footer/>
            </div>
        )
    }
}

export default withRouter(Signup_2)