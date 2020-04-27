import React, { Component } from "react";
import { Modal } from 'antd';

class OrderModal extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
        }
    }

  render() {
    return (
      <Modal
        title="Vertically centered modal dialog"
        centered
        visible={this.props.modalVisible}
        onOk={() => {console.log("Should redirect")}}
        onCancel={this.props.closeModal}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    );
  }
}

export default OrderModal;
