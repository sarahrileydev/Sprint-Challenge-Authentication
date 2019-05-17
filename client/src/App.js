import React from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

import "./App.css";
import Login from "./login/Login";
import Jokes from "./jokes/Jokes";
import Register from "./register/Register";



class App extends React.Component {
  render() {
    return (
      <>
        <AppBar position="static" color="primary">
          <ToolBar>
            <Typography variant="title" color="primary">
              <nav>
              <Button><NavLink to="/register" style={{ textDecoration: 'none', color: 'white' }}>Register</NavLink></Button>
                &nbsp; &nbsp;
                <Button><NavLink to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</NavLink></Button>
                &nbsp; &nbsp;
               <Button><NavLink to="/jokes" style={{ textDecoration: 'none', color: 'white' }}>Jokes</NavLink></Button> 
                &nbsp; &nbsp;
                <Button onClick={this.logout}>Logout</Button>
              </nav>
            </Typography>
          </ToolBar>
        </AppBar>

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
