import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

// const App = () => {
//   return <h1>Hello Webpack React</h1>;
// };

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <div>About</div>
          </Route>
          <Route path="/user/:id">
            <div>Users</div>
          </Route>
          <Route path="/">
            <div>List user</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
