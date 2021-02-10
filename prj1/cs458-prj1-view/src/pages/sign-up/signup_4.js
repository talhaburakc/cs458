import React from 'react';
import {Button, ButtonGroup} from 'react-bootstrap'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {withRouter} from "react-router-dom";

class Signup_4 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {plan: ""}
    }

    handleContinueClick = () => {
        let path = `/sign-up5`;

        this.props.history.push(path);
    }

    handleChoiceClick = (event) => {
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
                                <Button variant="danger" style={{marginRight: "25px", padding: "25px"}}
                                        onClick={this.handleChoiceClick}>Basic</Button>
                                <span>17.99 TL</span>
                            </div>

                            <div id="standard_button">
                                <Button variant="danger" style={{marginRight: "25px", padding: "25px"}}
                                        onClick={this.handleChoiceClick}>Standard</Button>
                                <span>29.99 TL</span>
                            </div>

                            <div>
                                <Button variant="danger" style={{padding: "25px"}}
                                        onClick={this.handleChoiceClick}>Premium</Button>
                                <span>41.99 TL</span>
                            </div>

                        </ButtonGroup>
                    </div>
                    <div style={{marginTop: "25px"}}>
                        <Button variant="danger" style={{width: "375px", marginLeft: "250px"}}
                                onClick={this.handleContinueClick}>Continue</Button>
                    </div>

                    <Footer/>
                </div>
            </div>
        )
    }
}

export default withRouter(Signup_4)