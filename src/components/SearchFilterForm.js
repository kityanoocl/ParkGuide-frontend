import React, { Component } from "react";
import {
  Radio,
  DatePicker,
  TimePicker,
  Form,
  Button,
  Switch,
  Select,
} from "antd";
import { DURATION_DROPDOWN } from "../constants/constants";
import ParkGuideApi from "../apis/ParkGuideApi";
import {
  CheckOutlined,
  FilePdfOutlined,
  FileJpgOutlined,
} from "@ant-design/icons";
import "./SearchFilterForm.css";

const { Option } = Select;

class SearchFilterForm extends Component {
  constructor(props) {
    super(props);

    this.advanceSearchOnChange = this.advanceSearchOnChange.bind(this);

    this.state = {
      advancedSearchDisplay: "none",
      locations: [],
    };
  }

  componentDidMount() {
    ParkGuideApi.getAllParkingLotsLocation().then((response) => {
      this.setState({ locations: response.data });
    });
  }

  advanceSearchOnChange(checked) {
    this.setState({ advancedSearchDisplay: checked ? "flex" : "none" });
  }

  render() {
    return (
      <div className="searchForm">
        <Form>
          <Form.Item label="I'm looking for a carpark on">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Arriving at">
            <TimePicker />
          </Form.Item>
          <Form.Item label="And the duration is">
            <Select placeholder="Dur. (hrs)" style={{ width: 110 }}>
              {DURATION_DROPDOWN.map((duration_amount) => (
                <Option key={"dur_" + duration_amount} value={duration_amount}>
                  {duration_amount}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="At">
            <Select placeholder="Select Location" style={{ width: 180 }}>
              {this.state.locations.map((location) => (
                <Option key={"loc_" + location} value={location}>
                  {location}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Advanced filter">
            <Switch onChange={this.advanceSearchOnChange} />
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
          <Button className="resultButton" type="primary">
            Show Results
          </Button>
        </Form>
      </div>
    );
  }
}

export default SearchFilterForm;
