import React, { Component } from "react";
import { Divider } from "antd";
import SearchArea from "./SearchArea";
import SearchResult from "./SearchResult";
import ParkGuideApi from "../../apis/ParkGuideApi";

class SearchPageContainer extends Component {
  constructor(props) {
    super(props);

    this.searchParkingSLots = this.searchParkingSLots.bind(this);

    this.state = {
      results: [],
    };
  }

  searchParkingSLots(params) {
    ParkGuideApi.getParkingSlots(params).then((response) => {
      this.setState({ results: response.data });
    });
  }

  render() {
    return (
      <div id="SearchPageContainer">
        <SearchArea searchParkingSLots={this.searchParkingSLots} />
        <Divider />
        <SearchResult results={this.state.results} />
      </div>
    );
  }
}

export default SearchPageContainer;
