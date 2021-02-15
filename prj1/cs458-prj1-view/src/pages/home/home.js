import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Button, Form} from "react-bootstrap";
import React from "react";
import {withRouter} from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {invalidEmail: false, email: ""}
    }

    handleEmailChange = (email) => {
        this.setState({invalidEmail: false});
        this.setState({email: email.target.value});
    }

    handleContinueClick = (e) => {

        e.preventDefault();
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(this.state.email)) {
            this.setState({invalidEmail: true});
            return;
        }

        let accountExists = false;
        this.props.users.forEach((user) => {
            if (user.email === this.state.email) {
                accountExists = true;
            }
        })

        this.props.updateCurrentUserEmail(this.state.email);
        if (accountExists) {
            this.props.history.push('sign-in');
        } else {
            this.props.history.push('sign-up1');
        }
    }

    render() {
        return (
            <div>
                <Header link_text="Sign in"/>

                <div style={{marginTop: "100px"}}>
                    <div style={{width: "25%", margin: "auto"}}>
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
                                <Button variant="danger" type="submit" className="w-100"
                                        onClick={this.handleContinueClick}>
                                    Get Started
                                </Button>
                            </Form.Group>
                        </Form>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default withRouter(Home)