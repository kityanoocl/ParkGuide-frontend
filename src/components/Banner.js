import React, { Component } from "react";
import { Button, Typography, Row, Col } from 'antd';
import { NavLink } from "react-router-dom";
import logo from '../img/banner.png'
const { Text } = Typography;
class Banner extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="formArea">
          {/* <SearchFilterForm /> */}
          <Row justify="space-around" align="middle">
            <Col span={10}>
              <img src={logo} alt="app loco" height="300px" />
            </Col>
            <Col height="100%" span={10}>
              <Row gutter={[0, 40]}>
                <Text>
                What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
              </Row>
              <Row justify="center">
                <NavLink to="/search">
                <Button className="resultButton" type="primary" style={{ borderRadius: "7px" }}>
                  Let's Search
                </Button>
                </NavLink>
              </Row>

            </Col>
          </Row>



        </div>
      </React.Fragment>
    );
  }
}

export default Banner;
