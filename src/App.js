import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { About } from './components/About';
import { Forms } from './components/Forms';
import { Home } from './components/Home';
import { Topics } from './components/Topics';
import { Users } from './components/Users';
import logo from './logo.svg';



export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello, world!</h1>
          <p>Welcome to React Router Quickstart</p>

          <nav className="navbar">
            <ul className="nav-links">
              <li>
                <Link className="nav-item" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/users">
                  Users
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/topics">
                  Topics
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/forms">
                  Forms
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/forms">
            <Forms />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
