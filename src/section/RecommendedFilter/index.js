import React, { Component } from 'react'
import './style.css'

export default class RecommendedFilter extends Component {
    render() {
        return (
            <div className='container recommend-filter'>

                <div className='filter-item'>
                    <h2 className='title'>
                        RECOMMENDED
                        COLUMN
                    </h2>
                    <p className='des'>
                        オススメ
                    </p>
                </div>

                <div className='filter-item'>
                    <h2 className='title'>
                        RECOMMENDED
                        DIET
                    </h2>
                    <p className='des'>
                        ダイエット
                    </p>
                </div>

                <div className='filter-item'>
                    <h2 className='title'>
                        RECOMMENDED
                        BEAUTY
                    </h2>
                    <p className='des'>
                        美容
                    </p>
                </div>

                <div className='filter-item'>
                    <h2 className='title'>
                        RECOMMENDED
                        HEALTH
                    </h2>
                    <p className='des'>
                        健康
                    </p>
                </div>
            </div>
        )
    }
}
