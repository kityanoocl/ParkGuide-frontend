import React, { Component } from 'react';
import './App.css';
import { Layout } from "antd";
import { CarOutlined } from "@ant-design/icons";
import HomePageContainer from "./components/HomePageContainer";
import SearchPageContainer from "./components/search_page/SearchPageContainer";
import { Router, Route, Switch, NavLink } from "react-router-dom";
import LoginPage from "./components/LoginPage"
import UserProfile from "./components/UserProfile";
import UserOrders from "./components/UserOrders";
import history from './history';
import NavigationBar from "./components/NavigationBar";
const { Header, Content, Footer } = Layout;

export default class App extends Component {
  constructor(props) {
    super(props)

    this.onLogin = this.onLogin.bind(this);

    this.state = {
      isLoggedIn: false,
      name: '',
      userID: ''
    }
  }

  onLogin(user) {

    this.setState({
      isLoggedIn: user.isLoggedIn,
      name: user.name,
      userID: user.userID
    })
  }

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Layout className="layout">
          
            <Header className="layoutHeader" >
            <NavLink to="/" className="logoHeader">
                <CarOutlined className="headerLogo" />
              </NavLink>
              <NavigationBar isLoggedIn={this.state.isLoggedIn}
                name={this.state.name} userID={this.state.userID} />

            </Header>

            <Content className="layoutContent">
              <Switch>
                <Route exact={true} path="/" component={HomePageContainer} />
                <Route path="/search" render={(props) => <SearchPageContainer {...props} isLoggedIn={this.state.isLoggedIn} />} />
                <Route path="/LoginPage" render={(props) => <LoginPage {...props} onLogin={this.onLogin} />} />
                <Route path="/UserProfile/:userParam" component={UserProfile} />
                <Route path="/UserOrders/:userParam" component={UserOrders} />
              </Switch>
            </Content>
            <Footer id="layoutFooter" style={{ textAlign: "center" }}>
              All the right reserved by 500-YourThingIsBroken @copyright
        </Footer>
          </Layout>
        </Router>
      </div>
    );
  }
}

