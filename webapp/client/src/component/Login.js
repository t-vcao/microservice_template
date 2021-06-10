import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
import "./Login.css"
import login from "../logic/account.js";

export default class LoginButton extends React.Component {
  static propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    passwordText: PropTypes.string,
    signin: PropTypes.bool
  };

  handleClick = () => {
    this.signin = login(this.username, this.password);
  };
  
  usernameChange = (val) => {
    this.username = val;
		console.log(this.username, this.username.length);
  }

  passwordChange = (target) => {
    this.password = target.value;
    target.value = '*'.repeat(this.password.length);
  }

  render() {
    const text = this.signin ? "Logout" : "Login";
    return (
      <form>
        <label>
          Username:
          <input type="text" value={this.props.username} onChange={e => this.usernameChange(e.target.value)}/>
        </label>
        <label>
          Password:
          <input type="text" value={this.props.password} onChange={e => this.passwordChange(e.target)}/>
        </label>
        <button onClick={this.handleClick()}>
           {text}
        </button>
      </form>
    );
  }
}

