import React, { Component } from "react";
import { Modal, Typography } from 'antd';

const { Text } = Typography;
class OrderModal extends Component {
    constructor(props) {
        super(props);
        
    }

  render() {
    return (
      <Modal
        title={this.props.modalContent.name}
        centered
        visible={this.props.modalVisible}
        onOk={() => {console.log("Should redirect")}}
        onCancel={this.props.closeModal}
        okText={"Place Order"}
      >
        <Text>Location: {this.props.modalContent.location}</Text><br/>
        <Text>Available Slot: {this.props.modalContent.vacancy}</Text><br/>
        <Text>Time: {this.props.userCriteria.startTime} to {this.props.userCriteria.endTime}</Text><br/>
        <Text>Car Type: {this.props.userCriteria.type}</Text><br/>
        <Text>Total Price: ${this.props.modalContent.price * this.props.userCriteria.duration}</Text>
      </Modal>
    );
  }
}

export default OrderModal;
