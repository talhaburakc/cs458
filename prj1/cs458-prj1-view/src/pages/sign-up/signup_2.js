import React from 'react';
import {Button, Form} from 'react-bootstrap'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {useHistory, withRouter} from "react-router-dom";


class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}

class Signup_2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: this.props.currentUserEmail || '',
            checkbox: false, password: '',
            invalidEmail: false,
            invalidPassword: false
        }
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

        if (re.test(this.state.email) && this.state.password.trim() !== "") {
            this.props.addUser(new User(this.state.email, this.state.password));
            this.props.history.push(`/sign-up3`);
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
                                                  onChange={this.handleEmailChange}/>
                                    {
                                        this.state.invalidEmail &&
                                        <span style={{color: "orange", fontSize: "1em"}}>
                                        This email is invalid
                                            </span>
                                    }

                                </Form.Group>

                                <Form.Group>
                                    <Form.Control type="password" placeholder="Password" value={this.state.password}
                                                  onChange={this.handlePasswordChange}/>
                                    {
                                        this.state.invalidPassword &&
                                        <span style={{color: "orange", fontSize: "1em"}}>
                                        Password can not be empty
                                            </span>
                                    }

                                </Form.Group>
                                <Form.Group>
                                    <Form.Check type="checkbox" label="Please do not email me Netflix special offers."
                                                value={this.state.checkbox} onChange={this.handleCheckBoxChange}/>
                                </Form.Group>
                                <Button variant="danger" type="submit" className="w-100"
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