import React, { Component } from "react";
import ParkingSlot from "./ParkingSlot";

class SearchResult extends Component {
  render() {
    return (
      <div>
        {this.props.results.map((parkingLot) => (
          <ParkingSlot
            key={"parkingSlot_" + parkingLot.id}
            id={parkingLot.id}
            name={parkingLot.name}
            location={parkingLot.location}
            vacancy={parkingLot.vacancy}
            price={30}
            openBookingModal={this.props.openModal}
            setModalContent={this.props.setModalContent}
            parkingLot={parkingLot}
          />
        ))}
      </div>
    );
  }
}

export default SearchResult;
