import React, { Component } from 'react';
import './style.css';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openMenu: false
        };
        this.toggleMenuPopup = this.toggleMenuPopup.bind(this)
    }

    componentDidMount() {
        document.body.onclick = () => {
            this.setState({
                openMenu: false
            })
        }
    }

    toggleMenuPopup(e) {
        e.stopPropagation();
        this.setState({
            openMenu: !this.state.openMenu
        })
    }




    render() {

        return (
            <div id="header">
                <div className='container'>
                    <a href="#"><img className='logo' src="/img/logo.png" /></a>
                    <nav className='navi'>
                        <ul>
                            <li><a href="#/my-record"><img src="/img/icon-menu1.png" className='icon' />自分の記録</a></li>
                            <li><a href="#"><img src="/img/icon-menu2.png" className='icon' />チャレンジ</a></li>
                            <li>
                                <a href="#">
                                    <img src="/img/icon-menu3.png" className='icon' />
                                    <div className='babel'>
                                        1
                                    </div>
                                    お知らせ
                                </a>

                            </li>
                        </ul>
                        <span className={'menu-toggle ' + (this.state.openMenu ? 'active' : '')} onClick={this.toggleMenuPopup}>
                            <span></span>
                        </span>

                        {
                            this.state.openMenu ?
                                <div onClick={this.toggleMenuPopup} className='menu-popup'>
                                    <a href="#/my-record">自分の記録</a>
                                    <a href="#">体重グラフ</a>
                                    <a href="#">目標</a>
                                    <a href="#">選択中のコース</a>
                                    <a href="#/recommended">コラム一覧</a>
                                    <a href="#">設定</a>
                                </div>
                                : null
                        }
                    </nav>
                </div>
            </div>
        )
    }
}
