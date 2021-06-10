import React from "react";
import Display from "./Display";
import Login from "./Login"
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="component-app">
        <div className="header">
          <div className="right">
            <Login />
          </div>
          
        </div>
        
        <Display />
      </div>
    );
  }
}
