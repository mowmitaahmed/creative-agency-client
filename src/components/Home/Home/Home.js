import React from 'react';
import BrandsArea from '../BrandsArea/BrandsArea';
import CarouselArea from '../CarouselArea/CarouselArea';
import FooterArea from '../FooterArea/FooterArea';
import Header from '../Header/Header';
import ServicesArea from '../ServicesArea/ServicesArea';
import TestimonialArea from '../TestimonialArea/TestimonialArea';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BrandsArea></BrandsArea>
            <ServicesArea></ServicesArea>
            <CarouselArea></CarouselArea>
            <TestimonialArea></TestimonialArea>
            <FooterArea></FooterArea>
        </div>
    );
};

export default Home;