import {Navbar, Image} from "react-bootstrap";
import React from 'react';
import {Link, useHistory, withRouter} from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    routeChange = () => {
        let path = `/sign-in`;
        this.props.history.push(path);
    }

    render() {
        return (
            <Navbar className="static-top justify-content-between border-bottom" style={{height: "100px"}}>
                <a href="/">
                    <Image src="netflix_logo.png"/>
                </a>
                <Link onClick={this.routeChange} style={{color: " black"}}>{this.props.link_text}</Link>
            </Navbar>
        );
    }
}

export default withRouter(Header);