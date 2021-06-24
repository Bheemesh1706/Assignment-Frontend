
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {LoginForm} from './Login/LoginComponent'
import useLocalStorage from './hooks/uselocalstorage'
import React from "react";
import {Meeting} from "./Meeting/MeetingComponent"

function App() {

  const usernameProps = useLocalStorage('username')
  const [username] = usernameProps

  return (
    <Router>
      <div className="App">
        <div className="main">
          <div className="left"></div>
          {username ? (
            <Switch>
              <Route path="/meeting">
                <Meeting/>
              </Route>
              <Route>
                <Redirect to="/meeting" />
              </Route>
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/">
                <LoginForm usernameProps={usernameProps} />
              </Route>
              <Route>
                <Redirect to="/" />
              </Route>
            </Switch>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
