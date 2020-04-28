import React, { Component } from 'react'
import axios from 'axios'
import {Divider, Typography, Button} from 'antd'
const { Text } = Typography;

export default class UserOrders extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userOrders: []
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
                <p><b>Order Id: </b>000000000{order.orderId}</p>
                <p><b>Parking lot name: </b>{order.parkingLotName}</p>
                <p><b>Parking lot location: </b> {order.parkingLotLocation}</p>
                <p><b>Parking lot type: </b> {order.parkingSlotType}</p>
                <p><b>Start time: </b> {order.parkingStartTime}</p>
                <p><b>End time: </b> {order.parkingEndTime}</p>
                <p><b>Price: $</b>{order.price} <Button danger>{order.discountContent}</Button></p>
                <p><b>Order status: </b>{order.status}</p>
                
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
