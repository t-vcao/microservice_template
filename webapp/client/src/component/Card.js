import CartButton from "./CartButton";
import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

export default class Card extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    productID: PropTypes.string,
    description: PropTypes.string,
    src: PropTypes.string
  };

  render() {
    return (
      <div className="card"> 
        
        <div className="bg-img"><img src={this.props.src} /></div>

        <div className="content">
          <h4>{this.props.name}</h4>
          <p>{this.props.description}</p>
            <CartButton productID={this.props.productID}/>
        </div>
      
      </div>
    );
  }
}