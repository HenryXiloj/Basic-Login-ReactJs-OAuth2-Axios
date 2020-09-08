import { Component } from "react";
import axios from "axios";
import { authUrl } from "../util/Util";

class AuthService extends Component {
  login(json) {
    const headers = {
      Authorization: "Basic " + btoa("signsignature:12345"),
      "Content-type": "application/x-www-form-urlencoded",
    };

    return axios({
      method: "POST",
      url: authUrl,
      params: {
        username: json.username,
        password: json.password,
        grant_type: "password",
      },
      headers: headers,
    });
  }

  user(accessToken) {
    const payload = this.getDataToken(accessToken);
    return payload.username;
  }

  saveToken(accessToken) {
    sessionStorage.setItem("token", accessToken);
  }

  getDataToken(accessToken) {
    if (accessToken) {
      console.log(JSON.parse(atob(accessToken.split(".")[1])));
      return JSON.parse(atob(accessToken.split(".")[1]));
    }
    return null;
  }

  isAuthenticated() {
    let token = sessionStorage.getItem("token");
    const payload = this.getDataToken(token);
    if (payload != null && payload.username && payload.username.length > 0) {
      return true;
    }
    return false;
  }
}

const authService = new AuthService();

export default authService;
