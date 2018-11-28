import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
// import Home from './components/Home'
// import Login from './components/Login'
// import About from './components/About'

const link = {
  width:'100px',
  padding:'12px',
  margin:'0 6px 6px',
  background:'blue',
  textDecoration: 'none',
  color:'white'
}

const Navbar = () =>
  <div>
    <NavLink
      to='/'
      exact
      style={link}
      activeStyle={{
        background:'darkBlue'
      }}
    >Home</NavLink>
    <NavLink
      to='/about'
      exact
      style={link}
      activeStyle={{
        background:'darkBlue'
      }}
    >About</NavLink>
    <NavLink
      to='/login'
      exact
      style={link}
      activeStyle={{
        background:'darkBlue'
      }}
    >Login</NavLink>
  </div>

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

const About = () => {
  return(
    <div>
    <h1>This is my about component!</h1>
    </div>
  )
}

const Login = () => {
  return(
    <div>
      <form>
        <div>
          <input type='text' name='username' placeholder='username'/>
          <label htmlFor='username'>Username</label>
        </div>
        <div>
          <input type='password' name='password' placeholder='password'/>
          <label type='password'>Password</label>
        </div>
        <input type='submit' value='login'/>
      </form>
    </div>
  )
}

ReactDOM.render((
  <Router>
  <div>
    <Navbar/>
    <Route exact path='/' render={Home}/>
    <Route exact path='/about' render={About}/>
    <Route exact path='/login' render={Login}/>
  </div>
  </Router>),
  document.getElementById('root')
);
