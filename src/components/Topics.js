import React from 'react';

import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <p>
        This demonstrates how dynamic nested routing works - the result is based on the input value
        and not a prepared element. And use of match.url and match.path makes it easy to only worry
        about the last part of the path that matters for this component.
      </p>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}
