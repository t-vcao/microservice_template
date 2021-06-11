import React from "react";
import Display from "./Display";
import Login from "./Login"
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="component-app">
        <div className="header">
          <div>
          {/* <h2>I Scream for Ice Cream</h2> */}
          </div>
          <div className="right">
            <Login />
          </div>
          
        </div>
        
        <Display />
      </div>
    );
  }
}
