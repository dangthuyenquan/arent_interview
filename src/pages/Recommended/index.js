import React, { Component } from 'react'
import RecommendedFilter from '../../section/RecommendedFilter'
import RecommentResult from '../../section/RecommentResult'

export default class Recommended extends Component {
  render() {
    return (
      <div className='recommend-page'>
        <RecommendedFilter />
        <RecommentResult />
      </div>
    )
  }
}
