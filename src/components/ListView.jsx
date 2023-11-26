import React from "react";
import ShopListItem from "./ShopListItem";

class ListView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list-view">
        {this.props.products.map((el, index) => 
          <ShopListItem key={index} product={el} />
        )}
      </div>
    )
  }
}

export default ListView
