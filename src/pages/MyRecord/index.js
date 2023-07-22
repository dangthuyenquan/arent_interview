import React, { Component } from 'react'
import MyRecordFilter from './../../section/MyRecordFilter'
import Historty from './../../section/Historty'
import MyExercise from './../../section/MyExercise'
import BodyRecord from '../../section/BodyRecord'

export default class MyRecord extends Component {
    render() {
        return (
            <div className='my-record'>
                <MyRecordFilter />
                <BodyRecord />
                <MyExercise />
                <Historty />
            </div>
        )
    }
}
