import React, { Component } from 'react'
import { Layout, Space, Button } from "antd";
import { Router, Route, NavLink, Switch } from "react-router-dom";
import { CarOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
export default class NavigationBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }

    }

onClick(){
    window.location.reload()
}

    render() {
        console.log(this.props.isLoggedIn)
        const { name } = this.props
        const userLink = name ? "/UserProfile/" + this.props.userID : "/LoginPage"

        return (
            <div className="loginAndRegister">
                <Space>
                    <Button><NavLink to="/"> Home </NavLink></Button>
                    <Button><NavLink to={userLink}> {name ? name : 'Login'}</NavLink></Button>
                    {name ? <Button onClick={this.onClick}><NavLink to="/"> Logout </NavLink></Button> : '' }
                    
                </Space>

            </div>


        )
    }
}
