import React, { Component } from 'react'
import './style.css'
import LineChart from '../../components/LineChart'

export default class Banner extends Component {
  render() {
    return (
      <div className='banner'>
        <div className='banner_left'>
          <img src="/img/d01.jpg" />
          <div className='circle_precent' role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <span className='date'>05/21</span>
            <span className='precent'>75%</span>
          </div>
        </div>
        <div className='banner_right'>
          <LineChart />
        </div>
      </div>
    )
  }
}
