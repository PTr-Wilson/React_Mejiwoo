import React from 'react'
import "./header.css"
class Header extends React.Component {
  render(){  return (
        <header className="header-area">
        <div className="header__container ">
            <div className="header__menu">
                <nav className="header__nav">
                    <ul>
                        <li className="current-page"><a href="#">Home</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Category</a></li>
                        <li><a href="#">SALE</a></li>
                    </ul>
                </nav>
            </div>
            <div className="header__logo">
                <div className="header__logo_text">MEJIWOO <br /><span className="subtext">미지우</span></div>
            </div>
            <div className="header__user-icons">
                <div className="header__search">
                    <input type="text" className="header__search-input" placeholder="Search" />
                    <div className="header__search-icon"><img src="/assets/public/materialsymbolssearch.svg" /></div>
                </div>
                <div className="header__user-icon" style={{fontFamily:"Inter"}}> <img src="/assets/public/teenyiconsbagoutline.svg" />
                </div>

                <div className="header__user-icon" style={{fontFamily:"Crimson Text"}}> <img src="/assets/public/uiwuser.svg" /></div>
            </div>
        </div>

        
    </header>


    )
}
};
export default Header