import React, { Component } from "react";

import Menu from "../menu/Menu";

import authService from "../../services/auth/AuthService";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      authenticated: false,
    };
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();

    authService
      .login(this.state)
      .then((response) => {
        authService.saveToken(response.data.access_token);
        this.setState({
          authenticated: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.state.authenticated) {
      return (
        <div>
          <Menu></Menu>
        </div>
      );
    } else {
      const { username, password } = this.state;
      return (
        <div>
          <form onSubmit={this.submitHandler}>
            <div>
              <input
                type="text"
                name="username"
                value={username}
                onChange={this.changeHandler}
              ></input>
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.changeHandler}
              ></input>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      );
    }
  }
}

export default Login;
