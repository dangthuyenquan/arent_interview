import React, { Component } from 'react'
import Button from './../../components/Button'
import './style.css'

export default class Historty extends Component {

    constructor(props) {
        super(props);
        this.state = {
            histories: []
        };
    }


    handleAddMoreHistory = async () => {
        this.setState({
            histories: [
                ...this.state.histories,
                ...(await this.handleFetchData()),
            ]
        })
    }

    componentDidMount = async () => {
        this.setState({
            histories: await this.handleFetchData(),
        })
    }

    handleFetchData = async () => {
        const response = await fetch('/mockData/histories.json');
        const data = await response.json();
        return data;
    }


    render() {
        return (
            <div className='container'>
                <h2 className='calendar-title'>MY DIARY</h2>
                <div className='calendar'>
                    {
                        this.state.histories.map((item, index) => (
                            <div key={index} className='calendar-item'>
                                <h3 className='title'>{item.date} <br />{item.time}</h3>
                                <p className='des'>
                                    {item.title}<br />
                                    {item.description}
                                </p>
                            </div>
                        ))
                    }
                </div>
                <div className='load-more'>
                    <Button onClick={this.handleAddMoreHistory}>自分の日記をもっと見る</Button>
                </div>
            </div>
        )
    }
}
