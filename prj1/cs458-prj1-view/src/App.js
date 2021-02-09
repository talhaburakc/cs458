import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/home';
import SignIn from './pages/sign-in/signin';
import Signup_1 from './pages/sign-up/signup_1';
import Signup_2 from './pages/sign-up/signup_2';
import Signup_3 from './pages/sign-up/signup_3';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <Signup_1 />
          </Route>
          <Route path="/sign-up2">
            <Signup_2 />
          </Route>
          <Route path="/sign-up3">
            <Signup_3 />
          </Route>
        </Switch>

        {/*<ul>*/}
        {/*  <li>*/}
        {/*    <Link to="/">Home</Link>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <Link to="/sign-in">About</Link>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <Link to="/sign-up">Dashboard</Link>*/}
        {/*  </li>*/}
        {/*</ul>*/}
      </div>
      
    </Router>
  );
}

export default App;
