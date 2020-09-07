import React, { Component } from "react";
import Login from "./components/login/Login";
import Menu from "./components/menu/Menu";
import authService from "./services/auth/AuthService";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
    };
  }

  componentWillMount() {
    let isAuth = authService.isAuthenticated();
    console.log(isAuth);

    this.setState({
      authenticated: isAuth,
    });
  }

  render() {
    if (this.state.authenticated) {
      return (
        <div>
          <Menu></Menu>
        </div>
      );
    } else {
      return (
        <div>
          <Login></Login>
        </div>
      );
    }
  }
}

export default App;
