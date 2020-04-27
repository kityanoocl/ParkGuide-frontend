import React, { Component } from "react";
import { Radio, DatePicker, TimePicker, Form, Button, Select } from "antd";
import { DURATION_DROPDOWN } from "../../constants/constants";
import ParkGuideApi from "../../apis/ParkGuideApi";
// import {
//   CheckOutlined,
//   FilePdfOutlined,
//   FileJpgOutlined,
// } from "@ant-design/icons";
import "./SearchArea.css";
import moment from "moment";

const { Option } = Select;

class SearchArea extends Component {
  constructor(props) {
    super(props);

    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleArrivalDateChange = this.handleArrivalDateChange.bind(this);
    this.handleArrivalTimeChange = this.handleArrivalTimeChange.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSearchOnClick = this.handleSearchOnClick.bind(this);

    this.state = {
      locations: [],
      selectedLocation: "",
      selectedArrivalDate: "",
      selectedArrivalTime: "",
      selectedDuration: 0,
      selectedType: "",
      advancedSearchDisplay: "none",
    };
  }

  componentDidMount() {
    ParkGuideApi.getAllParkingLotsLocation().then((response) => {
      this.setState({ locations: response.data });
    });
  }

  handleLocationChange(value) {
    this.setState({ selectedLocation: value });
  }

  handleArrivalDateChange(date, dateString) {
    console.log(date);
    console.log(dateString);
    this.setState({ selectedArrivalDate: dateString });
  }

  handleArrivalTimeChange(time, timeString) {
    console.log(time);
    console.log(timeString);
    this.setState({ selectedArrivalTime: timeString });
  }

  handleDurationChange(value) {
    this.setState({ selectedDuration: value });
  }

  handleTypeChange(event) {
    this.setState({ selectedType: event.target.value });
  }

  handleSearchOnClick() {
    const startMoment = moment(this.state.selectedArrivalDate + " " + this.state.selectedArrivalTime);
    const endMoment = moment(this.state.selectedArrivalDate + " " + this.state.selectedArrivalTime).add(this.state.selectedDuration, 'hours');
    const DATE_FORMAT = "YYYY-MM-DD hh:mm:ss";
    console.log(startMoment.format(DATE_FORMAT));

    const params = {
      location: this.state.selectedLocation,
      startTime: startMoment.format(DATE_FORMAT),
      endTime: endMoment.format(DATE_FORMAT),
      type: this.state.selectedType,
      duration: this.state.selectedDuration,
    };

    this.props.searchParkingSLots(params);
  }

  render() {
    function disabledDate(current) {
      // Can not select days before today
      return current < moment().subtract(1, "days");
    }

    return (
      <div className="searchArea">
        <Form>
          <Form.Item>
            <span>Location:</span>
            <Select
              placeholder="Select Location"
              style={{ width: 180 }}
              onChange={this.handleLocationChange}
            >
              {this.state.locations.map((location) => (
                <Option key={"loc_" + location} value={location}>
                  {location}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <span>Arrival Date:</span>
            <DatePicker
              disabledDate={disabledDate}
              onChange={this.handleArrivalDateChange}
            />
          </Form.Item>
          <Form.Item>
            <span>Arrival Time:</span>
            <TimePicker
              format={"HH:mm"}
              minuteStep={15}
              onChange={this.handleArrivalTimeChange}
            />
          </Form.Item>
          <Form.Item>
            <span>Duration:</span>
            <Select
              placeholder="Dur. (hrs)"
              style={{ width: 110 }}
              onChange={this.handleDurationChange}
            >
              {DURATION_DROPDOWN.map((duration_amount) => (
                <Option key={"dur_" + duration_amount} value={duration_amount}>
                  {duration_amount}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <span>Car Type:</span>
            <Radio.Group defaultValue="4-wheels" size="large" onChange={this.handleTypeChange} >
              <div className="advanceSearchRadio">
                <Radio.Button value="four wheels">
                  {/* <CheckOutlined /> */}
                  4-Wheels
                </Radio.Button>
                <Radio.Button value="electric car">
                  {/* <FilePdfOutlined /> */}
                  Electric Car
                </Radio.Button>
                <Radio.Button value="two wheels">
                  {/* <FileJpgOutlined /> */}
                  Motor Bike
                </Radio.Button>
              </div>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button
              className="resultButton"
              type="primary"
              onClick={this.handleSearchOnClick}
            >
              Search
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default SearchArea;
