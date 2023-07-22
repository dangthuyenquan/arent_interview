import React, { Component } from 'react'
import './style.css'

export default class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <button onClick={this.props.onClick} className='button'>{this.props.children}</button>
        )
    }
}
