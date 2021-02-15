import React from 'react';
import {Button, Form} from 'react-bootstrap'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {withRouter} from "react-router-dom";


class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: props.currentUserEmail || '',
            checkbox: false,
            password: '',
            invalidEmail: false,
            invalidPhoneNumber: false,
            invalidPassword: false,
            invalidUser: false,
            isInputEmail: true,
        }
    }

    handleEmailChange = (email) => {
        this.setState({
            invalidEmail: false,
            invalidPhoneNumber: false,
            email: email.target.value,
            // !(if the first character of input is either '+' or a digit)
            isInputEmail: !(email.target.value.length > 0 && (email.target.value.charAt(0) == "+" || (email.target.value.charAt(0) >= '0' && email.target.value.charAt(0) <= '9'))),
        });
    }
    handlePasswordChange = (e) => {
        this.setState({invalidPassword: false});
        this.setState({password: e.target.value});
    }

    handleContinueClick = (e) => {
        this.setState({invalidUser: false})

        e.preventDefault();
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let phoneNumberRegex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
        if ((this.state.isInputEmail && emailRegex.test(this.state.email) || (!this.state.isInputEmail && phoneNumberRegex.test(this.state.email))) && this.state.password.trim() !== "") {
            let userExists = false;

            this.props.users.forEach((user) => {
                if ((user.email === this.state.email && user.password === this.state.password) || (user.phoneNumber === this.state.email && user.password === this.state.password)) {
                    userExists = true;
                }
            })

            if (userExists) {
                this.props.history.push("/success")
            } else {
                this.setState({invalidUser: true})
            }

        } else {
            if (this.state.isInputEmail && emailRegex.test(this.state.email) === false) {
                this.setState({invalidEmail: true})
            }
            if (!this.state.isInputEmail && phoneNumberRegex.test(this.state.email) === false) {
                this.setState({invalidPhoneNumber: true})
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
                            <h1>Sign in</h1>
                            {
                                this.state.invalidUser &&
                                <span style={{color: "orange", fontSize: "1em"}}>
                                        Sorry, we can't find your account. Please consider Signing Up.
                                            </span>
                            }

                            <Form>
                                <Form.Group>
                                    <Form.Label>{this.state.isInputEmail ? "Email address" : "Phone number"}</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email or phone number" value={this.state.email} id="enter_email_phone_input"
                                                  onChange={this.handleEmailChange}/>
                                    {
                                        this.state.invalidEmail &&
                                        <span style={{color: "orange", fontSize: "1em"}}>
                                            This email is invalid
                                        </span>
                                    }
                                    {
                                        this.state.invalidPhoneNumber &&
                                        <span style={{color: "orange", fontSize: "1em"}}>
                                            This phone number is invalid
                                        </span>
                                    }
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={this.state.password} id="enter_password_input"
                                                  onChange={this.handlePasswordChange}/>
                                    {
                                        this.state.invalidPassword &&
                                        <span style={{color: "orange", fontSize: "1em"}}>
                                        Password can not be empty
                                            </span>
                                    }

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

export default withRouter(Signin)