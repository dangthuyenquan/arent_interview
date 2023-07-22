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
            <svg style={{
              position: 'absolute',
              transform: 'rotate(280deg)',
            }} viewBox="22 22 44 44">
              <circle cx="44" cy="44" r="20.2" fill="none" strokeWidth="1" style={{
                strokeDasharray: 126.92, strokeDashoffset: '31.73px',
                stroke: 'currentcolor',
                transition: 'stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
              }}></circle>
            </svg>
          </div>
        </div>
        <div className='banner_right'>
          <LineChart />
        </div>
      </div>
    )
  }
}
