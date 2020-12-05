import React from 'react';
import './SingleCarousel.css';

const SingleCarousel = ({carousel}) => {
    return (

        // Single Carousel
        <div className="col-md-12 col-sm-12 col-xs-12 mb-4" align="center">
            <img src={carousel.img} alt={carousel.name} className="img-fluid singleCarousel"/>
        </div>
    );
};

export default SingleCarousel;