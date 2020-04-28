import React, { Component } from 'react'
import axios from 'axios'
import {Divider} from 'antd'

export default class UserOrders extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userOrders: [],
            parkingLotId: 0,
            parkingLotName: ''
        }
    }

    componentDidMount() {
        const userParam = this.props.match.params.userParam;
        console.log('orders   ' + userParam);

        axios.get("http://CHIURE-w10-3:8082/rest/parkguide/orders/" + userParam)
            .then(response => response.data)
            .then(data => {
                this.setState({
                    userOrders: data
                })
                console.log(data)
                console.log(this.state.userOrders)
            })

        // axios.get("http://CHIURE-w10-3:8082/rest/parkguide/parking-lots/")
        //     .then(response => response.data)

    }


    listItems = () =>
        this.state.userOrders.map(order => (
            <div className="card">
                <h1>{order.id}</h1>
                <p>{order.parkingLotId}</p>
                <p>{order.parkingStartTime}</p>
                <p>{order.parkingEndTime}</p>
                <Divider/>
            </div>
        ));

    render() {

        return (
            <div>
                <h2>Your have {this.state.userOrders.length} orders </h2>
                <p>{this.listItems()}</p>
            </div>
        )
    }
}
