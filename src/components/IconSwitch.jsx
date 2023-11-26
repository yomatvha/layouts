import React from "react";

class IconSwitch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="switch-icon" onClick={this.props.onSwitch}>
        <span className="material-icons">{this.props.icon}</span>
      </div>
    )
  }
}

export default IconSwitch
