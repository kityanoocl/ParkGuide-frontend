import React, { Component } from "react";
import { Carousel } from "antd";
import "./Trailor.css";

class Trailor extends Component {
  render() {
    return (
      <div className="trailor">
        <Carousel autoplay>
          <img
            src="https://cdn.asiatatler.com/asiatatler/i/hk/2018/11/05091435-performance-header-2_cover_1400x680.jpg"
            alt="Smiley face"
          />
          <img
            src="https://www.newtownplaza.com.hk/sites/default/files/2017-10/fashion_0.jpg"
            alt="Smiley face"
          />
          <img
            src="https://foodscene.deliveroo.hk/assets/images/blogs/foodscene.deliveroo.hk/en/promotions/1VOg9DX-A_uM3YHc33XVGrWWF8fDcoNFSftSn95R9w6Y/h_20190520_double20_blogpost_en.jpg?v=1.01"
            alt="Smiley face"
          />
        </Carousel>
      </div>
    );
  }
}

export default Trailor;
