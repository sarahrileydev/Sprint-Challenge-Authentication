import React, { Component } from "react";
import axios from "axios";
import requiresAuth from "../auth/requiresAuth";

class Jokes extends Component {
  state = {
    jokes: [],
  };

  componentDidMount() {
    const end = "http://localhost:3300/api/jokes";
    
    axios
      .get(end)
      .then(res => {
        this.setState({ jokes: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
       console.log(this.state.jokes)
    return (
       
      <div>
        <h2>Jokes</h2>
        <ul>
          {this.state.jokes.map(u => (
            <p key={u.id}>{u.joke}</p>
          ))}
        </ul>
      </div>
    );
  }
}
export default requiresAuth(Jokes);