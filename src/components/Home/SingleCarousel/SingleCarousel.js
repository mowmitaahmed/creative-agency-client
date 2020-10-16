import React from 'react';
import './SingleCarousel.css';

const SingleCarousel = ({carousel}) => {
    return (

        // Single Carousel
        <div className="col-md-12 mb-4">
            <img src={carousel.img} alt={carousel.name} className="img-fluid singleCarousel"/>
        </div>
    );
};

export default SingleCarousel;