import React, { Component } from 'react'
import Facebook from './Facebook'

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <Facebook onLogin={this.props.onLogin}/>

            </div>
        )
    }
}
