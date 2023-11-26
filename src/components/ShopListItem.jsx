import React from "react";

class ShopListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="list-product">
        <img className="list-product-img" src={this.props.product.img}></img>
        <div className="list-product-title">{this.props.product.name}</div>
        <div className="list-product-color">{this.props.product.color}</div>
        <div className="list-product-price">${this.props.product.price}</div>
        <button className="list-product-button">Add to cart</button>
      </div>
    )
  }
}

export default ShopListItem
