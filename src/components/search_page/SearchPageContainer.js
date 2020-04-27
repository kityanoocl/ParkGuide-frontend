import React, { Component } from "react";
import { Divider } from "antd";
import SearchArea from "./SearchArea";
import SearchResult from "./SearchResult";
import ParkGuideApi from "../../apis/ParkGuideApi";
import OrderModal from '../order-modal/OrderModal';
import Facebook from "../Facebook";

class SearchPageContainer extends Component {
  constructor(props) {
    super(props);

    this.searchParkingSLots = this.searchParkingSLots.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
    this.setModalContent = this.setModalContent.bind(this);
    this.state = {
      results: [],
      modalVisible: false,
      modalContent: {},
      userCriteria: {}
    };
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible })
  }
  searchParkingSLots(params) {
    ParkGuideApi.getParkingSlots(params).then((response) => {
      this.setState({
        results: response.data,
        userCriteria: params
      });
    });
  }

  setModalContent = (modalContent) => {
    console.log(modalContent);
    this.setState({ modalContent });
  }

  render() {
    let searchPageContent
    console.log(this.props.isLoggedIn)

    if (this.props.isLoggedIn) {
      searchPageContent = (
        <div id="SearchPageContainer">
          <SearchArea searchParkingSLots={this.searchParkingSLots} />
          <Divider />
          <SearchResult results={this.state.results} openModal={() => this.setModalVisible(true)} setModalContent={this.setModalContent} />
          <OrderModal
            modalVisible={this.state.modalVisible}
            closeModal={() => this.setModalVisible(false)}
            modalContent={this.state.modalContent}
            userCriteria={this.state.userCriteria}
          />
        </div>
      )
    } else {
      searchPageContent = (
        <div>
          <Facebook />
        </div>
      )
    }

    return (
      <div>{searchPageContent}</div>
    );
  }
}

export default SearchPageContainer;
