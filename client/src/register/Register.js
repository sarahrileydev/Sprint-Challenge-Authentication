import React from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';


class Register extends React.Component {
  state = {
   
    username: "",
    password: ""
  };

  render() {
    return (
      <>
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username" />
            <input
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              type="text"
              placeholder="username"
            />
          </div>
          <div>
            <label htmlFor="password" />
            <input
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              type="password"
              placeholder="password"
            />
          </div>
         
          <div>
            <Button variant="contained" color="secondary" type="submit">Register</Button>
          </div>
        </form>
      </>
    );
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
   
    const endpoint = "http://localhost:3300/api/register";
    axios
      .post(endpoint, this.state)
      .then(res => {
       
        localStorage.setItem("jwt", res.data.token); 
        this.props.history.push('/jokes');
      })
      .catch(err => {
        console.error(err);
      });
  };
}

export default Register;

