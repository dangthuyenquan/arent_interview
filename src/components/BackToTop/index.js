import React, { Component } from 'react'
import './style.css'

export default class BackToTop extends Component {

    onClick() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    render() {
        return (
            <div onClick={this.onClick} className='back-to-top'>
                <img src="/img/arrow-top-icon.png" />
            </div>
        )
    }
}
