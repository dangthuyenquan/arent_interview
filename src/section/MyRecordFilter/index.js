import React, { Component } from 'react'
import './style.css'

export default class MyRecordFilter extends Component {
    render() {
        return (
            <div className='my-record-filter container'>
                <div className='my-record-item'>
                    <div className='bg' >
                        <img src="img/MyRecommend-1.jpg" />
                    </div>
                    <div className='my-record-item_content'>
                        <h2 className='title'>BODY RECORD</h2>
                        <h3 className='des'>自分のカラダの記録</h3>
                    </div>
                </div>
                <div className='my-record-item'>
                    <div className='bg' >
                        <img src="img/MyRecommend-2.jpg" />
                    </div>
                    <div className='my-record-item_content'>
                        <h2 className='title'>MY EXERCISE</h2>
                        <h3 className='des'>自分の運動の記録</h3>
                    </div>
                </div>
                <div className='my-record-item'>
                    <div className='bg' >
                        <img src="img/MyRecommend-3.jpg" />
                    </div>
                    <div className='my-record-item_content'>
                        <h2 className='title'>MY DIARY</h2>
                        <h3 className='des'>自分の日記</h3>
                    </div>
                </div>
            </div>
        )
    }
}
