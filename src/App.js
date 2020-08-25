import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Users } from './components/Users';
import { Topics } from './components/Topics';
import { Forms } from './components/Forms';

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
                <Link class="nav-item" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link class="nav-item" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link class="nav-item" to="/users">
                  Users
                </Link>
              </li>
              <li>
                <Link class="nav-item" to="/topics">
                  Topics
                </Link>
              </li>
              <li>
                <Link class="nav-item" to="/forms">
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
