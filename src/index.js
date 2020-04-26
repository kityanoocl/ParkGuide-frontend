import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";
import { Button, Layout, Space } from "antd";
import HomePageContainer from "./components/HomePageContainer";
import SearchPageContainer from "./components/search_page/SearchPageContainer";
import { CarOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout className="layout">
        <Header className="layoutHeader">
          <Link to="/">
          <CarOutlined className="headerLogo" />
          </Link>
          <div className="loginAndRegister">
            <Space>
              <Button type="primary">Login</Button>
              <Button>Register</Button>
            </Space>
          </div>
        </Header>
        <Content className="layoutContent">
          <Route exact={true} path="/" component={HomePageContainer} />
          <Route path="/search" component={SearchPageContainer} />
          {/* <Route path="/user-profile" component={} /> */}
        </Content>
        <Footer id="layoutFooter" style={{ textAlign: "center" }}>
          All the right reserved by 500-YourThingIsBroken @copyright
        </Footer>
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
