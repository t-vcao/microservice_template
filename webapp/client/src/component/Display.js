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
          <Card name="Blackberry Chocolate" productID="BC" description="Wonderful flavor"
            src="https://www.haagendazs.us/sites/site.prod1.haagendazs.us/files/product/thumbnail-image/fl_TRIO_vanillablackberrychocolateTU.jpg"/>

          <Card name="Bourbon Praline Pecan" productID="BPP" description="Whine & Scream combo"
            src="https://www.haagendazs.us/sites/site.prod1.haagendazs.us/files/product/thumbnail-image/Thumb-Sept-2019-Bourbon-Praline-Pecan.png"/>

          <Card name="Butter Pecan" productID="BP" description="A classic" 
            src="https://www.haagendazs.us/sites/site.prod1.haagendazs.us/files/product/thumbnail-image/fl_IceCream_ButterPecan_0.jpg"/>

          <Card name="Javachip" productID="J" description="Decaf"
            src="https://www.haagendazs.us/sites/site.prod1.haagendazs.us/files/product/thumbnail-image/fl_IceCream_JavaChip.jpg"/>

          <Card name="Mango" productID="MAN" description="Tropical"
            src="https://www.haagendazs.us/sites/site.prod1.haagendazs.us/files/product/thumbnail-image/Thumb-Sept-2019-Mango.jpg"/>
          
          <Card name="Matcha" productID="MA" description="Sharon's reccomendation"
            src="https://www.haagendazs.us/sites/site.prod1.haagendazs.us/files/product/thumbnail-image/fl_IceCream_GreenTea.jpg"/>

          <Card name="Rocky Road" productID="RR" description="Take me home, to the place..."
            src="https://www.haagendazs.us/sites/site.prod1.haagendazs.us/files/product/thumbnail-image/fl_IceCream_RockyRoad.jpg"/>

          <Card name="Rose" productID="R" description="Fancy Whine & Scream combo"
            src="https://www.haagendazs.us/sites/site.prod1.haagendazs.us/files/product/thumbnail-image/HD-spirits_ros%C3%A9_packaging_thumb.jpg"/>
          </div>
        </div>
  
      </div>		
    );
  }
  
}