import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/home';
import SignIn from './pages/sign-in/signin';
import Signup_1 from './pages/sign-up/signup_1';
import Signup_2 from './pages/sign-up/signup_2';
import Signup_3 from './pages/sign-up/signup_3';
import Signup_4 from "./pages/sign-up/signup_4";
import Signup_5 from "./pages/sign-up/signup_5";
import Success from "./pages/final_page/success";
import React from 'react';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class User {
    constructor(email, password, phoneNumber) {
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [new User("elif@gmail.com", "elif"), new User("irem@gmail.com", "irem"), new User("talha@gmail.com", "talha", "+90 542 761 8930")],
            currentUserEmail: "",
            currentUserPassword: ""
        };
    }

    updateCurrentUserEmail = (email) => {
        this.setState({currentUserEmail: email})
    }

    updateCurrentUserPassword = (password) => {
        this.setState({currentUserPassword: password});
    }

    addUser = (newUser) => {
        const users = this.state.users
        let userExists = false;

        users.forEach((user) => {
            if (user.email === newUser.email) {
                userExists = true;
            }
        })

        if (!userExists) {
            users.push(newUser);
            this.setState({users: users});
        }
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Home updateCurrentUserEmail = {this.updateCurrentUserEmail}/>
                        </Route>
                        <Route path="/sign-in">
                            <SignIn users={this.state.users}/>
                        </Route>
                        <Route path="/success">
                            <Success/>
                        </Route>
                        <Route path="/sign-up1">
                            <Signup_1/>
                        </Route>
                        <Route path="/sign-up2">
                            <Signup_2 users={this.state.users}
                                      addUser={this.addUser}
                                      currentUserEmail = {this.state.currentUserEmail}
                            />
                        </Route>
                        <Route path="/sign-up3">
                            <Signup_3 users={this.state.users}/>
                        </Route>
                        <Route path="/sign-up4">
                            <Signup_4 users={this.state.users}/>
                        </Route>
                        <Route path="/sign-up5">
                            <Signup_5 users={this.state.users}/>
                        </Route>
                    </Switch>

                </div>

            </Router>
        );
    }
}

export default App;
