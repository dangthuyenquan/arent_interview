import React, { Component } from 'react'
import './style.css'
import Button from './../../components/Button'

export default class FoodList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <div className='food-list'>
                    {
                        this.props.foods.map((food, index) => (
                            <div key={index} className='food-item'>
                                <img src={food.thumbnail} />
                                <div className='food-lable'>
                                    {food.labelType}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='load-more'>
                    <Button onClick={this.props.handleAddMoreRecord}>コラムをもっと見る</Button>
                </div>
            </div>
        )
    }
}
