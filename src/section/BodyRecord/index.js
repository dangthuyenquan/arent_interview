import React, { Component } from 'react'
import LineChart from './../../components/LineChart'
import './style.css'

export default class BodyRecord extends Component {
    render() {
        return (
            <div className='container body-record'>
                <div className='body-record_title'>
                    <h2>BODY<br />RECORD</h2>
                    <span>2021.05.21</span>
                </div>
                <div className='body-record-content'>
                    <LineChart />
                    <div className='body-record-filter'>
                        <span className='record-filter-item'>日</span>
                        <span className='record-filter-item'>週</span>
                        <span className='record-filter-item'>月</span>
                        <span className='record-filter-item active'>年</span>
                    </div>
                </div>
            </div>
        )
    }
}
