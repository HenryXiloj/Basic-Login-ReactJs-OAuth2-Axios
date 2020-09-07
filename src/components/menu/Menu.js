import React, { Component } from "react";
import authService from "../../services/auth/AuthService";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }

  componentWillMount() {
    let token = sessionStorage.getItem("token");
    let username = authService.user(token);
    this.setState({
      username: username,
    });
  }
  render() {
    return <div>Welcome {this.state.username}</div>;
  }
}

export default Menu;
