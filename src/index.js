import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './components/Home'
import Login from "./components/Login";
import About from "./components/About";


const Navbar = () => (
  <div>
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={Home}
      /* add prop for activeStyle */
      activeStyle={{
        background: "darkblue"
      }}
    >
      Home
    </NavLink>
    <NavLink
      to="/about"
      exact
      style={About}
      activeStyle={{
        background: "darkblue"
      }}
    >
      About
    </NavLink>
    <NavLink
      to="/login"
      exact
      style={Login}
      activeStyle={{
        background: "darkblue"
      }}
    >
      Login
    </NavLink>
  </div>
);


// Step 2. Changed to have router coordinate what is displayed
ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
