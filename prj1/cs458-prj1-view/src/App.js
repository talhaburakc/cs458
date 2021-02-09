import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home';
import SignIn from './pages/sign-in/signin';
import SignUp from './pages/sign-up/signup';
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
            <SignUp />
          </Route>
        </Switch>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sign-in">About</Link>
          </li>
          <li>
            <Link to="/sign-up">Dashboard</Link>
          </li>
        </ul>
      </div>
      
    </Router>
  );
}

export default App;
