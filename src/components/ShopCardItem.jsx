import React from "react";

class ShopCardItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="card-product">
        <div className="card-product-title">{this.props.product.name}</div>
        <div className="card-product-color">{this.props.product.color}</div>
        <img className="card-product-img" src={this.props.product.img}></img>
        <div className="card-product-footer">
          <div className="card-product-price">${this.props.product.price}</div>
          <button className="card-product-button">Add to cart</button>
        </div>
      </div>
    )
  }
}

export default ShopCardItem
