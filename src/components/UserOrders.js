import React, { Component } from 'react'
import axios from 'axios'

export default class UserOrders extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userOrders: [],
            parkingLotId: 0,
        parkingLotName:''        }
    }

    componentDidMount() {
        const userParam = this.props.match.params.userParam;
        console.log('orders   ' + userParam);

        axios.get("http://CHIURE-w10-3:8082/rest/parkguide/orders/" + userParam)
            .then(response => response.data)
            .then(data => {
                this.setState({
                    userOrders: data,
                    parkingLotId: data.parkingLotId
                })
                console.log(data)
                console.log(this.state.userOrders)
            })

    }

    listItems = () =>
        this.state.userOrders.map(order => (
            <div className="card">
                <h1>{order.id}</h1>
                <p>{order.parkingLotId}</p>
                <p>{order.parkingStartTime}</p>
                <p>{order.parkingEndTime}</p>
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
