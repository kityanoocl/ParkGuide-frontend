import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";
import { Layout, Space } from "antd";
import HomePageContainer from "./components/HomePageContainer";
import SearchPageContainer from "./components/SearchPageContainer";
import { CarOutlined } from "@ant-design/icons";
import { Router, Route, NavLink, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage";
import UserProfile from "./components/UserProfile";
import history from './history';
const { Header, Content, Footer } = Layout;


ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Layout className="layout">
        <Header className="layoutHeader">
          <CarOutlined className="headerLogo" />
          <div className="loginAndRegister">
            <Space>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/LoginPage"> Login </NavLink>
            <NavLink to="/RegisterPage"> Register </NavLink>
            </Space>
          </div> 
        </Header>
        <Content className="layoutContent">
          <Switch>
          <Route exact={true} path="/" component={HomePageContainer} />
          <Route path="/search" component={SearchPageContainer} />
          <Route path="/LoginPage" component={LoginPage} />
          <Route path="/RegisterPage" component={RegisterPage} />
          <Route path="/UserProfile/:userParam" component={UserProfile} />
          {/* <Route path="/user-profile" component={} /> */}
          </Switch>
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
