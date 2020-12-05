import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import HomeNav from '../HomeNav/HomeNav';
import './Header.css';

const Header = () => {
    return (
        <div className="headerArea">
            <HomeNav></HomeNav>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;