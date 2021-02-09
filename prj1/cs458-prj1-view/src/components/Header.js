import {Navbar, Image} from "react-bootstrap";
import React from 'react';
import {Link, useHistory} from "react-router-dom";

export default function Header() {

    const history = useHistory();

    const routeChange = () => {
        let path = `/sign-in`;
        history.push(path);
    }

    return (
            <Navbar className="static-top justify-content-between border-bottom" style={{height: "100px"}}>
                <a href="/">
                    <Image src="netflix_logo.png"/>
                </a>
                <Link onClick={routeChange} style={{color:" black"}}>Sign in</Link>
            </Navbar>
    );
}