import {Navbar, Image} from "react-bootstrap";
import React from 'react';
import {Link, useHistory, withRouter} from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar className="static-top justify-content-between border-bottom" style={{height: "100px"}}>
                <Link to="/" id="link">
                    <Image src="netflix_logo.png"/>
                </Link>
                <Link to="/sign-in" style={{color: " black"}}>{this.props.link_text}</Link>
            </Navbar>
        );
    }
}

export default withRouter(Header);