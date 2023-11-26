import products from "../data/products";
import React from "react";
import ListView from "./ListView";
import CardsView from "./CardsView";
import IconSwitch from "./IconSwitch";

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: 'view_list',
    }
  }

  onClick() {
    if (this.state.icon === 'view_list') {
      this.setState({icon: 'view_module'});
    } else {
      this.setState({icon: 'view_list'});
    }
  }

  render() {
    return (
      <div className="container">
        <IconSwitch icon={this.state.icon} onSwitch={() => {this.onClick()}}/>

        {this.state.icon === 'view_module' ? (<ListView products={products}/>) : (<CardsView products={products}/>)}
      </div>
    )
  }
}

export default Store
