import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
import login from "../logic/account.js";

export default class LoginButton extends React.Component {
  static propTypes = {
    productID: PropTypes.string,
    clickHandler: PropTypes.func,
    signin: PropTypes.bool
  };

  handleClick = () => {
    this.signin = login("testACC", "password");
  };

  render() {
    const text = this.signin ? "Logout" : "Login";
    return (
        <button onClick={e => this.handleClick(e.target.value)}>
            ${text}
        </button>
    );
  }
}

