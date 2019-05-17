
import React from "react";
import { Route, NavLink, withRouter } from "react-router-dom";

import "./App.css";
import Login from "./login/Login";
import Jokes from "./jokes/Jokes";
import Register from "./register/Register"

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to="/register">Register</NavLink>
            &nbsp; &nbsp;
            <NavLink to="/login">Login</NavLink>
            &nbsp; &nbsp;
            <NavLink to="/jokes">Jokes</NavLink>
            &nbsp; &nbsp;
            <button onClick={this.logout}>Logout</button>
          </nav>
        </header>

        <main>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/jokes" component={Jokes} />
        </main>
      </>
    );
  }

  logout = () => {
    localStorage.removeItem("jwt");
    this.props.history.push("/login");
  };
}

export default withRouter(App);
