import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/mainstyles.scss";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/userlist" component={UserList} />
        <Route exact path="/userdetails/:userid" component={UserDetails} />
        <Route exact path="/userdetails/:userid" component={UserDetails} />
      </Switch>
    </div>
  );
}

export default App;
