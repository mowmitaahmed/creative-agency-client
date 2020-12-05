import React from 'react';
import Slack from '../../../images/Brands/slack.png';
import Google from '../../../images/Brands/google.png';
import Uber from '../../../images/Brands/uber.png';
import Netflix from '../../../images/Brands/netflix.png';
import Airbnb from '../../../images/Brands/airbnb.png';
import SingleBrandsLogo from '../SingleBrandsLogo/SingleBrandsLogo';

const brandsData = [
    {
        name: 'Slack', 
        img: Slack
    },
    {
        name: 'Google',
        img: Google
    },
    {
        name: 'Uber',
        img: Uber
    },
    {
        name: 'Netflix',
        img: Netflix
    },
    {
        name: 'Airbnb',
        img: Airbnb
    }
]

const BrandsArea = () => {
    return (
        <div className="container my-5 py-3">
            <div className="row mx-5 text-center">
                {
                    brandsData.map(brandsLogo =><SingleBrandsLogo brandsLogo={brandsLogo}></SingleBrandsLogo> )
                }
            </div>
        </div>
    );
};

export default BrandsArea;