import React from "react";
import ShopCardItem from "./ShopCardItem";

class CardsView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-view">
        {this.props.products.map((el, index) => 
          <ShopCardItem key={index} product={el} />
        )}
      </div>
    )
  }
}

export default CardsView
