import React, { Component } from "react";
import { Button, Card } from "antd";

class ParkingSlot extends Component {
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
      <Card className="parkingCard" bordered={false}>
        <div className="cardContent">
          <p>{this.state.name}</p>
          <p>Location: {this.state.location}</p>
          <p>Cost: $30/hour</p>
          <p>Space available: 5 left</p>
          <p>Distance: 35 m</p>
          <Button type="primary" shape="round" size="Default">Book Now</Button>
        </div>
      </Card>
    );
  }
}

export default ParkingSlot;
