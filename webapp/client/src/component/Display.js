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

            <Card name="Butter Pecan" productID="BP" description="Wonderful flavor" 
            src="https://www.haagendazs.us/sites/site.prod1.haagendazs.us/files/product/thumbnail-image/fl_IceCream_ButterPecan_0.jpg"/>

            <Card name="Bourbon and Raisin" productID="BR" description="Wonderful flavor"
            src="https://www.haagendazs.us/sites/site.prod1.haagendazs.us/files/product/thumbnail-image/Thumb-Sept-2019-Bourbon-Praline-Pecan.png"/>

            <Card name="Mint Chocolate Chip" productID="MC" description="Wonderful flavor"
            src="https://www.haagendazs.us/sites/site.prod1.haagendazs.us/files/product/thumbnail-image/fl_IceCream_GreenTea.jpg"/>

            <Card name="Coffee" productID="C" description="Wonderful flavor"
            src="https://www.haagendazs.us/sites/site.prod1.haagendazs.us/files/product/thumbnail-image/fl_IceCream_JavaChip.jpg"/>

            <Card name="Peach Whiskey" productID="PW" description="Wonderful flavor"
            src="https://www.haagendazs.us/sites/site.prod1.haagendazs.us/files/product/thumbnail-image/HD-spirits_ros%C3%A9_packaging_thumb.jpg"/>

            <Card name="Jungle Juice" productID="JJ" description="Wonderful flavor"
            src="https://www.haagendazs.us/sites/site.prod1.haagendazs.us/files/product/thumbnail-image/fl_TRIO_vanillablackberrychocolateTU.jpg"/>

          </div>
        </div>
  
      </div>		
    );
  }
  
}