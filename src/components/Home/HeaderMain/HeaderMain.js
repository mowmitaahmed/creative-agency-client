import React from 'react';
import Banner from '../../../images/logos/Frame.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <div className="container mb-5 mt-3">
            <div className="row">

                {/* Banner Texts */}
                <div className="col-md-5 mt-5 pt-3">
                    <h1 className="headerTitle">Let’s Grow Your Brand To The Next Level</h1>
                    <p className="headerDescription mr-5 my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <button className="btn btn-brand">Hire us</button>
                </div>

                {/* Banner Image */}
                <div className="col-md-7">
                    <img src={Banner} alt="HeaderBanner" className="image-fluid headerBanner"/>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;