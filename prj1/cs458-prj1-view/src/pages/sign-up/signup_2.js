import React from 'react';
import {Button, Form} from 'react-bootstrap'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {useHistory, withRouter} from "react-router-dom";
import User from '../../models/User';


class Signup_2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: this.props.currentUserEmail || '',
            checkbox: false, password: '',
            invalidEmail: false,
            invalidPassword: false,

        }

        console.log(props.users);
    }


    handleEmailChange = (email) => {
        this.setState({invalidEmail: false});
        this.setState({email: email.target.value});
    }
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
        this.setState({invalidPassword: false});
    }
    handleCheckBoxChange = (e) => {
        this.setState({checkbox: e.target.value});
    }

    handleContinueClick = (e) => {
        e.preventDefault();
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let user = new User(this.state.email, this.state.password);
        user.setSignUpStep(3);
        if (re.test(this.state.email) && this.state.password.trim() !== "") {
            this.props.addUser(user);
            this.props.history.push({
                pathname: "/sign-up3",
                data: user
            });
        } else {
            if (re.test(this.state.email) === false) {
                this.setState({invalidEmail: true})
            }
            if (this.state.password.trim() === "") {
                this.setState({invalidPassword: true})
            }
        }
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
                                    <Form.Control type="email" placeholder="Enter email" value={this.state.email}
                                                  id="email_input"
                                                  onChange={this.handleEmailChange}/>

                                    {
                                        this.state.email.trim().length === 0 &&
                                        <span style={{color: "darkred", fontSize: "1em"}}>
                                        Email is required!
                                            </span>
                                    }
                                    {
                                        this.state.email.trim().length > 0 && (this.state.email.trim().length < 5 || this.state.email.trim().length > 50) &&
                                        <span style={{color: "darkred", fontSize: "1em"}}>
                                        Email should be between 5 and 50 characters
                                            </span>
                                    }
                                    {
                                        this.state.email.trim().length > 0 && this.state.invalidEmail &&
                                        <span style={{color: "darkred", fontSize: "1em"}}>
                                        Please enter a valid email address
                                            </span>
                                    }

                                </Form.Group>

                                <Form.Group>
                                    <Form.Control type="password" placeholder="Password" value={this.state.password}
                                                  id="password_input"
                                                  onChange={this.handlePasswordChange}/>

                                    {
                                        this.state.password.trim().length === 0 &&
                                        <span style={{color: "darkred", fontSize: "1em"}}>
                                        Password is required!
                                            </span>
                                    }
                                    {
                                        this.state.password.trim().length > 0 && (this.state.password.trim().length < 4 || this.state.password.trim().length > 60) &&
                                        <span style={{color: "darkred", fontSize: "1em"}}>
                                        Password should be between 4 and 60 characters
                                            </span>
                                    }


                                </Form.Group>
                                <Form.Group>
                                    <Form.Check type="checkbox" label="Please do not email me Netflix special offers."
                                                id="notify_checkbox"
                                                value={this.state.checkbox} onChange={this.handleCheckBoxChange}/>
                                </Form.Group>
                                <Button variant="danger" type="submit" className="w-100" id="continue_button"
                                        onClick={this.handleContinueClick}>
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