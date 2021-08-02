import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
import addCart from "../logic/cart.js";

export default class CartButton extends React.Component {
  static propTypes = {
    productID: PropTypes.string,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    addCart("testACC", this.props.productID);
  };

  render() {
    return (
        <button onClick={e => this.handleClick()}>
            Add to Cart
        </button>
    );
  }
}

