import React, { Component } from "react";
import { Card } from "antd";

class ParkingLot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      name: this.props.name,
      location: this.props.location,
    };
  }

  render() {
    return (
      <Card className="parkingLotCard" bordered={false}>
        <div className="cardContent">
          <span>{this.state.name}</span>
          <p>{this.state.location}</p>
        </div>
      </Card>
    );
  }
}

export default ParkingLot;
