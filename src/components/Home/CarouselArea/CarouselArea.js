import React from 'react';
import './CarouselArea.css';
import Carousel1 from '../../../images/carousels/carousel-1.png';
import Carousel2 from '../../../images/carousels/carousel-2.png';
import Carousel3 from '../../../images/carousels/carousel-3.png';
import Carousel4 from '../../../images/carousels/carousel-4.png';
import Carousel5 from '../../../images/carousels/carousel-5.png';
import Carousel from 'react-elastic-carousel/dist/index';
import SingleCarousel from '../SingleCarousel/SingleCarousel';

// Carousels Data
const carouselData = [
    {
        name: 'Carousel 1',
        img: Carousel1
    }, 
    {
        name: 'Carousel 2',
        img: Carousel2
    }, 
    {
        name: 'Carousel 3',
        img: Carousel3
    }, 
    {
        name: 'Carousel 4',
        img: Carousel4
    }, 
    {
        name: 'Carousel 5',
        img: Carousel5
    }
]

const CarouselArea = () => {
    return (
        <div className="carouselArea">
            <div className="container">

                {/* Heading Row */}
                <div className="row">
                    <div className="col-md-12 my-5 pt-5">
                        <h1 className="AreaTitle text-white">Here are some of our <span className="text-green">works</span> </h1>
                    </div>
                </div>

                {/* Carousel Row */}
                <div className="row mb-5 mt-3">
                    <Carousel itemsToShow={3} showArrows={false}>
                        {
                            carouselData.map(carousel => <SingleCarousel carousel={carousel}></SingleCarousel>)
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default CarouselArea;