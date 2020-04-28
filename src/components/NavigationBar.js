import React, { Component } from 'react'
import { Space, Button } from "antd";
import { NavLink } from "react-router-dom";

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
        const userOrders = "/UserOrders/" + this.props.userID

        return (
            <div className="loginAndRegister">           
                <Space>
                    <Button><NavLink to="/"> Home </NavLink></Button>
                    <Button><NavLink to={userLink}> {name ? name : 'Login'}</NavLink></Button>
                    {name ? <Button><NavLink to={userOrders}> Orders </NavLink></Button> : '' }        
                    {name ? <Button onClick={this.onClick}><NavLink to="/"> Logout </NavLink></Button> : '' }             
                </Space>
            </div>
        )
    }
}
