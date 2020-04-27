import React, { Component } from "react";
import SearchFilterForm from "./SearchFilterForm";
import "./Banner.css";

class Banner extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="formArea">
          <SearchFilterForm />
        </div>
      </React.Fragment>
    );
  }
}

export default Banner;
