import React, { Component } from 'react'
import Banner from '../../section/Banner'
import Filter from '../../section/Filter'
import FoodList from '../../section/FoodList'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterType: 'all',
            foods: []
        };
    }

    componentDidMount = async () => {
        this.setState({
            foods: await this.handleFetchData(),
        })
    }

    handleFetchData = async () => {
        const response = await fetch('/mockData/foods.json');
        const data = await response.json();
        return data;
    }

    handleAddMoreRecord = async () => {
        this.setState({
            ...this.state,
            foods: [
                ...this.state.foods,
                ...(await this.handleFetchData()),
            ]
        })
    }

    handleFilter = (type) => () => {
        this.setState({
            ...this.state,
            filterType: type,
        })
    }


    render() {
        return (
            <div className='homepage'>
                <Banner />
                <Filter typeCurrent={this.state.filterType} handleFilter={this.handleFilter} />
                <FoodList foods={this.state.filterType === 'all' ? this.state.foods : this.state.foods.filter(item => item.type === this.state.filterType)} handleAddMoreRecord={this.handleAddMoreRecord} />
            </div>
        )
    }
}
