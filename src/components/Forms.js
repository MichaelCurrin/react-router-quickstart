import React from 'react';

import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

function TextSimple() {
  return (
    <form>
      <p>A simple text form</p>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

function SelectSimple() {
  return (
    <select>
      <option value="grapefruit">Grapefruit</option>
      <option value="lime">Lime</option>
      <option selected value="coconut">
        Coconut
      </option>
      <option value="mango">Mango</option>
    </select>
  );
}

class TextControlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Runs on every keystroke.
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          A controlled component with an alert. The input value is driven by the React state so you
          can work with it.
        </p>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />{' '}
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class SelectControlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'coconut' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            {' '}
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export function Forms() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Forms</h2>
      <p>
        This is similar to the Topics example but uses fixed paths and some form content based on
        the <a href="https://reactjs.org/docs/forms.html">Forms</a> tutorial in the React docs.
      </p>

      <ul>
        <li>
          <Link to={`${match.url}/text-simple`}>Text Simple</Link>
        </li>
        <li>
          <Link to={`${match.url}/text-controlled`}>Text Controlled</Link>
        </li>
        <li>
          <Link to={`${match.url}/select-simple`}>Select Simple</Link>
        </li>
        <li>
          <Link to={`${match.url}/select-controlled`}>Select Controlled</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/text-simple`}>
          <TextSimple />
        </Route>
        <Route path={`${match.path}/text-controlled`}>
          <TextControlled />
        </Route>
        <Route path={`${match.path}/select-simple`}>
          <SelectSimple />
        </Route>
        <Route path={`${match.path}/select-controlled`}>
          <SelectControlled />
        </Route>
      </Switch>
    </div>
  );
}
