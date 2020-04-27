import React, { Component } from 'react'
import axios from 'axios'
import { Input, Button, Form } from 'antd'

export default class UserProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            fullName: '',
            carLicense: '',
            location: '',
            membershipLevel: 0,
            userParam: ''

        }

        this.onChange = this.onChange.bind(this)
        this.onUpdate = this.onUpdate.bind(this)
    }


    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onUpdate(event) {
        const userParam = this.props.match.params.userParam;
        event.preventDefault()
        //alert(this.state.userID + '   ' + this.state.name + '   ' + this.state.carLicense)

        if (this.state.fullName.length === 0) {
            alert("Please input your name")
            return null

        } else {
            const updatedItems = {
                id: this.state.userID,
                fullName: this.state.fullName,
                carLicense: this.state.carLicense,
                location: this.state.location,


            }

            axios.put("http://CHIURE-w10-3:8082/rest/parkguide/members/" + userParam, updatedItems)
                .then(response => {
                    if (response.data != null) {
                        this.setState(this.state)
                        alert("Saved successfully")
                    }
                })
        }

        // this.context.history.push('/RegisterPage')

    }


    componentDidMount() {
        const userParam = this.props.match.params.userParam;
        console.log('this   ' + userParam);

        axios.get("http://CHIURE-w10-3:8082/rest/parkguide/members/" + userParam)
            // .then(response=>console.log(response.data))
            .then(response => {
                this.setState({
                    userId: response.data.id,
                    fullName: response.data.fullName,
                    carLicense: response.data.carLicense,
                    location: response.data.location,
                    membershipLevel: response.data.membershipLevel

                })
                console.log(response.data.id + '   ' + this.state.fullName)
            })
    }



    render() {
        const { carLicense, location, fullName, membershipLevel } = this.state
        return (
            <div>
                <h2>User Profile</h2>
                {this.props.value}
                <Form labelCol={{
                    span: 4,
                }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal">

                    <Form.Item label="* Your name: ">
                        <Input required autoComplete="off" name="fullName" value={fullName}
                            onChange={this.onChange}
                            type="text" placeholder="Your name"></Input>
                    </Form.Item>

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

                    <Form.Item label="Membership level: ">
                        <Input required autoComplete="off" name="membershipLevel" value={membershipLevel}
                            disabled="true"></Input>

                    </Form.Item>




                    <Button size="sm" type="submit" onClick={this.onUpdate}>Submit</Button>

                </Form>
            </div>
        )
    }
}
