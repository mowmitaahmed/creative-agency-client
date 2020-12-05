import React from 'react';
import './SingleTestimonial.css';

const SingleTestimonial = ({testimonial}) => {
    return (

        // Single Testimonial Card
        <div className="col-md-4 col-xs-12 col-sm-12" align="center">
            <div className="singleTestimonial p-3 mx-2 mb-4">
                <div className="testimonialUpper d-flex align-items-center">
                    <img src={testimonial.img} alt="" className="img-fluid"/>
                    <div className="testimonialSide ml-4">
                        <h5>{testimonial.name}</h5>
                        <h6>{testimonial.designation}</h6>
                    </div>
                </div>
                <div className="testimonialLower mt-2">
                    <p>{testimonial.description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleTestimonial;