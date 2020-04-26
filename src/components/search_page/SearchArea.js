import React, { Component } from "react";
import { Radio, DatePicker, Form, Button, Switch, Select } from "antd";
import { DURATION_DROPDOWN } from "../../constants/constants";
import ParkGuideApi from "../../apis/ParkGuideApi";
import {
  CheckOutlined,
  FilePdfOutlined,
  FileJpgOutlined,
} from "@ant-design/icons";
import "./SearchArea.css";
import moment from "moment";

const { Option } = Select;

class SearchArea extends Component {
  constructor(props) {
    super(props);

    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleArrivalDateTimeChange = this.handleArrivalDateTimeChange.bind(
      this
    );
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.handleAdvanceSearchOnChange = this.handleAdvanceSearchOnChange.bind(
      this
    );
    this.handleSearchOnClick = this.handleSearchOnClick.bind(this);

    this.state = {
      isAdvance: false,
      locations: [],
      selectedLocation: "",
      selectedArrivalDateTime: "",
      selectedDuration: 0,
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

  handleArrivalDateTimeChange(date, dateString) {
    console.log(date);
    console.log(dateString);
    this.setState({ selectedArrivalDateTime: dateString });
  }

  handleDurationChange(value) {
    this.setState({ selectedDuration: value });
  }

  handleAdvanceSearchOnChange(checked) {
    this.setState({
      isAdvance: checked ? true : false,
      advancedSearchDisplay: checked ? "flex" : "none",
    });
  }

  handleSearchOnClick() {
    this.props.searchParkingSLots(this.state);
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
            <span>Arrival DateTime:</span>
            <DatePicker
              disabledDate={disabledDate}
              showTime={{
                defaultValue: moment(moment().format("hh:mm:ss"), "HH:mm:ss"),
              }}
              onChange={this.handleArrivalDateTimeChange}
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
            <span>Advanced search:</span>
            <Switch onChange={this.handleAdvanceSearchOnChange} />
          </Form.Item>
          <Form.Item style={{ display: this.state.advancedSearchDisplay }}>
            <Radio.Group defaultValue="a" size="large">
              <div className="advanceSearchRadio">
                <Radio.Button value="electric">
                  <CheckOutlined />
                </Radio.Button>
                <Radio.Button value="motor">
                  <FilePdfOutlined />
                </Radio.Button>
                <Radio.Button value="disability">
                  <FileJpgOutlined />
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
