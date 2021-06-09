import React from "react";
import Display from "./Display";
import LoginButton from "./LoginButton"
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="component-app">
        <div className="header">
          <div className="right">
          <LoginButton />
          </div>
          
        </div>
        
        <Display />
      </div>
    );
  }
}
