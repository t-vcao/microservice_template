import React from "react";
import "./Display.css";
import Card from "./Card.js";

export default class Display extends React.Component {
  render() {
    return (
      <div className="gallery">
        <div id="title"> 
          <h1>Ice Cream</h1>
        </div>
  
        <div className="products">
          <div className="grid-container">

            <Card name="Butter Pecan" productID="BP" description="Wonderful flavor"/>

            <Card name="Bourbon and Raisin" productID="BR" description="Wonderful flavor"/>

            <Card name="Mint Chocolate Chip" productID="MC" description="Wonderful flavor"/>

            <Card name="Coffee" productID="C" description="Wonderful flavor"/>

            <Card name="Peach Whiskey" productID="PW" description="Wonderful flavor"/>

            <Card name="Jungle Juice" productID="JJ" description="Wonderful flavor"/>

          </div>
        </div>
  
      </div>		
    );
  }
  
}