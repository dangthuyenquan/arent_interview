import React, { Component } from 'react'
import './style.css'
import Button from '../../components/Button'

export default class RecommentResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menus: []
        };
    }

    componentDidMount = async () => {
        this.setState({
            menus: await this.handleFetchData(),
        })
    }

    handleFetchData = async () => {
        const response = await fetch('/mockData/recomment.json');
        const data = await response.json();
        return data;
    }

    handleAddMoreMenu = async () => {
        this.setState({
            menus: [
                ...this.state.menus,
                ...(await this.handleFetchData()),
            ]
        })
    }


    render() {
        return (
            <div className='container'>
                <div className='recomment-list'>
                    {
                        this.state.menus.map((item, index) => (
                            <div className='recomment-item' key={index}>
                                <div className='thumbnail'>
                                    <img src={item.thumbnail} />
                                    <div className='recomment-lable'>
                                        {item.date}&nbsp;&nbsp;&nbsp;{item.time}
                                    </div>
                                </div>

                                <p className='des'>
                                    {item.description}
                                </p>
                                <h4 className='hash-tag'>
                                    {
                                        item.hashTag.map((hashItem, indexHas) => (
                                            <span key={indexHas}>
                                                {hashItem}
                                            </span>
                                        ))
                                    }
                                </h4>
                            </div>
                        ))
                    }
                </div>
                <div className='load-more'>
                    <Button onClick={this.handleAddMoreMenu}>コラムをもっと見る</Button>
                </div>
            </div>
        )
    }
}
