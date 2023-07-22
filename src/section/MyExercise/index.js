import React, { Component } from 'react'
import './style.css'

export default class MyExercies extends Component {
    render() {
        return (
            <div className='container exercise'>
                <div className='my-exercise_title'>
                    <h2>MY<br />EXERCISE</h2>
                    <span>2021.05.21</span>
                </div>
                <div className='exercise-list'>
                    {
                        [...Array(30)].map((_item, index) => (
                            <div key={index} className='exercise-item'>
                                <div className='exercise-left'>
                                    <h4>家事全般（立位・軽い）</h4>
                                    <p className='kcal'>26kcal</p>
                                </div>
                                <div className='exercise-right'>
                                    10 min
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
