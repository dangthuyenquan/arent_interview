import React, { Component } from 'react'
import './style.css'

export default class Filter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='filter'>
        <div className={'filter_item ' + (this.props.typeCurrent === 'Morning' ? 'active' : '')} onClick={this.props.handleFilter('Morning')}>
          <img className='icon' src="/img/icon_knife.png" />
          Morning
        </div>
        <div className={'filter_item ' + (this.props.typeCurrent === 'Lunch' ? 'active' : '')} onClick={this.props.handleFilter('Lunch')}>
          <img className='icon' src="/img/icon_knife.png" />
          Lunch
        </div>
        <div className={'filter_item ' + (this.props.typeCurrent === 'Dinner' ? 'active' : '')} onClick={this.props.handleFilter('Dinner')}>
          <img className='icon' src="/img/icon_knife.png" />
          Dinner
        </div>
        <div className={'filter_item ' + (this.props.typeCurrent === 'Snack' ? 'active' : '')} onClick={this.props.handleFilter('Snack')}>
          <img className='icon' src="/img/icon_cup.png" />
          Snack
        </div>
      </div>
    )
  }
}
