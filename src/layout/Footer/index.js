import React, { Component } from 'react'
import './style.css';
import BackToTop from '../../components/BackToTop';

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <BackToTop />
        <nav className='container'>
          <ul>
            <li><a href="#">会員登録</a></li>
            <li><a href="#">運営会社</a></li>
            <li><a href="#">利用規約</a></li>
            <li><a href="#">個人情報の取扱について</a></li>
            <li><a href="#">特定商取引法に基づく表記</a></li>
            <li><a href="#">お問い合わせ</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}
