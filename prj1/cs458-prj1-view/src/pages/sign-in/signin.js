import React from 'react';
import {Button, Form} from 'react-bootstrap'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {withRouter} from "react-router-dom";


class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            checkbox: false,
            password: '',
            invalidEmail: false,
            invalidPassword: false,
            invalidUser: false
        }
    }

    handleEmailChange = (email) => {
        this.setState({invalidEmail: false});
        this.setState({email: email.target.value});
    }
    handlePasswordChange = (e) => {
        this.setState({invalidPassword: false});
        this.setState({password: e.target.value});
    }

    handleContinueClick = (e) => {
        this.setState({invalidUser: false})

        e.preventDefault();
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(this.state.email) && this.state.password.trim() !== "") {
            let userExists = false;

            this.props.users.forEach((user) => {
                if (user.email === this.state.email && user.password === this.state.password) {
                    userExists = true;
                }
            })

            if (userExists) {
                this.props.history.push("/success")
            } else {
                this.setState({invalidUser: true})
            }

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
                            <h1>Sign in</h1>
                            {
                                this.state.invalidUser &&
                                <span style={{color: "orange", fontSize: "1em"}}>
                                        Sorry, we can't find your account. Please consider Signing Up.
                                            </span>
                            }

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

export default withRouter(Signin)