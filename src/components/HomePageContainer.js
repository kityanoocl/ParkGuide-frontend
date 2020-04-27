import React, { Component } from "react";
import Banner from "./Banner";
import ParkingLotList from "./ParkingLotList";
import { Divider } from "antd";

class HomePageContainer extends Component {
  render() {
    return (
      <div className="HomePageContainer">
        <Banner />
        <Divider className="divider" />
        <ParkingLotList />
      </div>
    );
  }
}

export default HomePageContainer;
