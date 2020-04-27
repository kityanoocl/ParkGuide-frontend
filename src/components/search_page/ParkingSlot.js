import React, { Component } from "react";
import { Button, Card } from "antd";

class ParkingSlot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      name: this.props.name,
      location: this.props.location,
      vacancy: this.props.vacancy,
      price: this.props.price,
    };
  }

  render() {
    return (
      <Card className="parkingCard" bordered={false}>
        <div className="cardContent">
          <p>{this.state.name}</p>
          <p>Location: {this.state.location}</p>
          <p>Cost: ${this.state.price}/hour</p>
          <p>Space available: {this.state.vacancy < 10 ? this.state.vacancy : "Many "} left</p>
          <Button type="primary" shape="round" size="Default">Book Now</Button>
        </div>
      </Card>
    );
  }
}

export default ParkingSlot;
