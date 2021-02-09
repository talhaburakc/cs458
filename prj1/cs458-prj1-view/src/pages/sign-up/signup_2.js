import React from 'react';
import {Button, Form} from 'react-bootstrap'
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Signup_2() {

    return (
        <div>
            <Header/>

            <div style={{marginTop: "15px"}}>
                <div className="w-25" style={{margin: "auto"}}>
                    <div>
                        <span id="" className="stepIndicator" data-uia="">STEP <b>1</b> OF <b>3</b></span>
                        <h1 className="stepTitle" data-uia="stepTitle">Create a password to start your membership.</h1>
                    </div>

                    <div>
                        <div className="contextRow" data-uia="contextRowDone">Just a few more steps and you're done!
                        </div>
                        <div className="contextRow" data-uia="contextRowPaperWork">We hate paperwork, too.</div>
                        <br/>

                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Please do not email me Netflix special offers."/>
                            </Form.Group>
                            <Button variant="danger" type="submit" className="w-100">
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