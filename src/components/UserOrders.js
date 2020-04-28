import React, { Component } from 'react'
import axios from 'axios'
import { Divider, Typography, Button } from 'antd'
const { Text } = Typography;

export default class UserOrders extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userOrders: [],
            orderId: '',
            status: ''
        }

        this.onClick = this.onClick.bind(this)
    }

    componentDidMount() {
        const userParam = this.props.match.params.userParam;
        console.log('orders   ' + userParam);

        axios.get("http://CHIURE-w10-3:8082/rest/parkguide/orders/" + userParam)

            .then(response => {
                const data = response.data;
                console.log("did moount", data)
                this.setState({
                    userOrders: data,
                    orderId: data.orderId
                }, () => {
                    console.log(data)
                    console.log(this.state.orderId)
                })

            })

    }

    onClick(userOrderId) {
        console.log("click...", userOrderId)

        const findOrder = this.state.userOrders.find(element => element.orderId === userOrderId);
        const orderId = findOrder.orderId
        const orderStatus = findOrder.status
        console.log(orderStatus)

        if (orderStatus === 'Cancelled') {
            alert("Booking is already cancelled")
        } else {

            axios.put("http://CHIURE-w10-3:8082/rest/parkguide/orders/" + orderId)
                //.then(response => console.log(response.data))
                .then(response => {
                    if (response.data != null) {
                        this.setState({
                            status: 'Cancelled'
                        })
                        alert("Booking cancelled successfully")
                        window.location.reload()
                    }
                })
        }


    }


    listItems = () =>
        this.state.userOrders.map(order => (
            <div className="card">
                <p><b>Order Id: </b> {("00000000" + order.orderId).slice(-8)
                }</p>
                <p><b>Parking lot name: </b>{order.parkingLotName}</p>
                <p><b>Parking lot location: </b> {order.parkingLotLocation}</p>
                <p><b>Parking lot type: </b> {order.parkingSlotType}</p>
                <p><b>Start time: </b> {order.parkingStartTime}</p>
                <p><b>End time: </b> {order.parkingEndTime}</p>
                <p><b>Price: $</b>{order.price} <Button danger>{order.discountContent}</Button></p>
                <p><b>Order status: </b>{order.status} <Button onClick={() => this.onClick(order.orderId)}>Cancel order</Button></p>

                <Divider />
            </div>
        ));

    render() {

        return (
            <div>
                <h2>Your have {this.state.userOrders.length} order(s) </h2>
                <p>{this.listItems()}</p>
            </div>
        )
    }
}
