import React, { Component } from "react";
import ParkingLot from "./ParkingLot";
import ParkGuideApi from "../apis/ParkGuideApi";
import "./ParkingLotList.css";

class ParkingLotList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parkingLots: [],
    };
  }

  componentDidMount() {
    ParkGuideApi.getAllParkingLots().then((response) => {
      const recievedParkingLots = response.data;
      this.setState({ parkingLots: recievedParkingLots });
    });
  }

  render() {
    return (
      <div className="parkingLotList">
        {this.state.parkingLots.map((parkingLot) => (
          <ParkingLot
            key={"parkingLot_" + parkingLot.id}
            id={parkingLot.id}
            name={parkingLot.name}
            location={parkingLot.location}
            removeTodo={this.removeTodo}
          />
        ))}
      </div>
    );
  }
}

export default ParkingLotList;
