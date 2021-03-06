import React from "react";
import ReactDOM from 'react-dom'
import PropTypes from "prop-types";
import "./Button.css";
import "./Login.css"
import login from "../logic/account.js";
import update from "../logic/update.js";

export default class LoginButton extends React.Component {
  static propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    passwordText: PropTypes.string,
    signin: PropTypes.bool,
    loginText: PropTypes.string,
    intervalId: PropTypes.number
  };

  constructor(props)
  {
    super(props);
    this.refs = React.createRef();
    this.loginText = "Sign In";
  }

  handleClick = () => {
    if (this.signin)
    {
      let element = ReactDOM.findDOMNode(this.refs.loginCreds);
      element.style.visibility = 'visible';
      this.signin = false;
      
      let button = ReactDOM.findDOMNode(this.refs.button);
      button.textContent = 'Sign In';
      this.loginText = 'Sign In';

      alert("You've signed out!");
      
      this.render();
    }
    else
    {
      console.log("signing in", this.username, this.password);
      this.signin = login(this.username, this.password).then(this.render()).then((valid) =>
      {
        if (valid)
        {
          let element = ReactDOM.findDOMNode(this.refs.loginCreds);
          element.style.visibility = 'hidden';

          let button = ReactDOM.findDOMNode(this.refs.button);
          button.textContent = 'Sign Out';
          this.loginText = 'Sign Out';

          alert(`You've signed in as ${this.username}!`);

          this.render();
        }
        else
        {
          alert("Invalid username or password.");
        }
      });
    }
  };
  
  usernameChange = (val) => {
    this.username = val;
  }

  passwordChange = (val) => {
    this.password = val;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
        if (this.signin)
          update(this.username, this.password);
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  render() {
    const test = this.loginText;
    console.log(test);
    return (
      <div>
        <div id="login" ref = "loginCreds">
          <label>
            Username:
            <input type="text" value={this.username} onChange={e => this.usernameChange(e.target.value)}/>
          </label>
          <label>
            Password:
            <input type="password" value={this.password} onChange={e => this.passwordChange(e.target.value)}/>
          </label>
        </div>
        <button ref="button" onClick={e => this.handleClick()}>
            {test}
        </button>
      </div>
    );
  }
}

