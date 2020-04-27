import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import axios from 'axios'
import { NavLink } from "react-router-dom";
import { Input, Button, Form } from 'antd'
import history from './../history';

export default class Facebook extends Component {
    constructor(props) {
        super(props)

        this.state = this.initialState

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    initialState = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: '',
        carLicense: '',
        userCarLicense: '',
        location: ''
    }

    getThisMemberCarLicense() {
        axios.get('http://CHIURE-w10-3:8082/rest/parkguide/members/' + this.state.userID)

            .then(response => {
                if (response.data.carLicense != null) {
                    this.setState({
                        userCarLicense: response.data.carLicense

                    })
                    // console.log(response.data.carLicense)
                }
            })

    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit(event) {

        event.preventDefault()
        //alert(this.state.userID + '   ' + this.state.name + '   ' + this.state.carLicense)

        if (this.state.carLicense.length === 0 || this.state.location.length === 0) {
            alert('Please input required items')
            return null

        } else {
            const userInfo = {
                id: this.state.userID,
                fullName: this.state.name,
                carLicense: this.state.carLicense,
                location: this.state.location

            }

            console.log({ userInfo })
            axios.post("http://CHIURE-w10-3:8082/rest/parkguide/members", userInfo)

                .then(response => {
                    if (response.data != null) {
                        this.setState(this.initialState)
                        alert("Saved successfully")

                    }

                })
        }


        history.push("/UserProfile/" + this.state.userID)
        window.location.reload();

        // this.context.history.push('/RegisterPage')

    }

    responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url,

        })
    }

    componentClicked = () => console.log('clicked')

    render() {
        let fbContent
        const { carLicense, location } = this.state

        if (this.state.isLoggedIn) {
            this.getThisMemberCarLicense()
            // alert(this.state.userCarLicense.length)

            if (this.state.userCarLicense.length > 0) {
                fbContent = (
                    <div style={{
                        width: '400',
                        margin: 'auto',
                        padding: '20px'
                    }}>

                        <h2>Welcome {this.state.name}</h2>

                        <p>Your car license : {this.state.userCarLicense}</p>
                        <NavLink to={"/UserProfile/" + this.state.userID}> User Profile </NavLink>

                    </div>
                )
            } else {
                fbContent = (
                    <div style={{
                        width: '400',
                        margin: 'auto',
                        padding: '20px'
                    }}>
                        <h2>Please input the followings to proceed</h2>
                        <Form labelCol={{
                            span: 4,
                        }}
                            wrapperCol={{
                                span: 14,
                            }}
                            layout="horizontal">

                            <Form.Item label="Your car license: ">
                                <Input required autoComplete="off" name="carLicense" value={carLicense}
                                    onChange={this.onChange}
                                    type="text" placeholder="Your car license"></Input>
                            </Form.Item>

                            <Form.Item label="Preferred location: ">
                                <Input required autoComplete="off" name="location" value={location}
                                    onChange={this.onChange}
                                    type="text" placeholder="Your preferred location"></Input>
                            </Form.Item>

                            {/* <Input required autoComplete="off" name="carLicense" value={carLicense}
                            onChange={this.onChange}
                            type="text" placeholder="Enter car license"></Input> */}

                            {/* <Input required autoComplete="off" name="location" value={location}
                                onChange={this.onChange}
                                type="text" placeholder="Enter preferred location"></Input> */}
                            <Button size="sm" type="submit" onClick={this.onSubmit}>Submit</Button>

                        </Form>

                    </div>
                )
            }

        } else {

            fbContent = (
                <div>
                    <p>Click to login</p>
                    <FacebookLogin
                        appId="667513370492031"
                        autoLoad={true}
                        fields="name,email,picture"
                        onClick={this.componentClicked}
                        callback={this.responseFacebook} />

                </div>
            )

        }

        return (
            <div>
                <div>{fbContent}</div>

            </div>

        )
    }
}
