import React, { Component } from "react";
import { Modal, Typography, Select } from "antd";
import ParkGuideApi from "../../apis/ParkGuideApi";

const { Option } = Select;
const { Text } = Typography;

class OrderModal extends Component {
  constructor(props) {
    super(props);

    this.placeOrder = this.placeOrder.bind(this);
    this.handleDiscountChange = this.handleDiscountChange.bind(this);

    this.state = {
      discountId: undefined,
      discountValue: 1,
    };
  }

  placeOrder() {
    console.log(this.props.userCriteria.startTime);
    ParkGuideApi.postOrder(
      "00000001",
      this.props.modalContent.id,
      this.props.modalContent.slotId,
      this.state.discountId,
      this.props.userCriteria.startTime,
      this.props.userCriteria.endTime
    ).then((response) => {
      response.status === 201 ? window.location.replace("/") : alert("Failed to place order.");
    });
  }

  handleDiscountChange(value) {
    let selectedDiscount = this.props.modalContent.discounts.find(
      (discount) => discount.id === value
    );
    console.log(selectedDiscount);
    if (selectedDiscount !== undefined) {
      this.setState({
        discountId: selectedDiscount.id,
        discountValue: selectedDiscount.discountValue,
      });
    } else {
      this.setState({ discountId: undefined, discountValue: 1 });
    }
  }

  render() {
    return (
      <Modal
        title={this.props.modalContent.name}
        centered
        visible={this.props.modalVisible}
        onOk={() => {
          this.placeOrder();
        }}
        onCancel={this.props.closeModal}
        okText={"Place Order"}
      >
        <Text>Location: {this.props.modalContent.location}</Text>
        <br />
        <Text>
          Time: {this.props.userCriteria.startTime} to{" "}
          {this.props.userCriteria.endTime}
        </Text>
        <br />
        <Text>Car Type: {this.props.userCriteria.type}</Text>
        <br />
        <Text>
          Total Price: $
          {this.props.modalContent.price * this.props.userCriteria.duration}
        </Text>
        <br />
        <Text>
          Final Price: $
          {this.props.modalContent.price *
            this.props.userCriteria.duration *
            this.state.discountValue}
        </Text>
        <Select
          placeholder="Select discount"
          defaultValue={"none"}
          style={{ maxWidth: 300, minWidth: 180, float: "right" }}
          onChange={this.handleDiscountChange}
        >
          <Option key={"none"} value={"none"}>
            No discount applied
          </Option>
          {this.props.modalContent.discounts !== undefined
            ? this.props.modalContent.discounts.map((discount) => (
                <Option key={"dis_" + discount.id} value={discount.id}>
                  {discount.discountContent}
                </Option>
              ))
            : ""}
        </Select>
      </Modal>
    );
  }
}

export default OrderModal;
