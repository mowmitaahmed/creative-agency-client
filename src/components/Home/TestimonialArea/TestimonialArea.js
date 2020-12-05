import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';

const TestimonialArea = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetching Testimonials in Home Page from Databse
    useEffect(()=>{
        fetch('https://desolate-oasis-15440.herokuapp.com/reviewList',{
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            setTestimonials(data);
            setLoading(true);
        })
    },[])
    return (
        <div className="container my-5 py-3">

            {/* Testimonial Heading in Home Page */}
            <div className="row">
                <div className="col-md-12">
                    <h1 className="AreaTitle text-black ">Clients <span className="text-green">Feedback</span></h1>
                </div>
            </div>

            {/* Testimonials */}
            <div className="row my-5 py-3">                    
                
                {/* Bootstrap Testimonial */}
                    {
                        loading === false && <div className="col-md-12 col-12 spinner-grow text-warning text-center py-5 my-5"></div>
                    }

                {/* Mapping Testimonial */}
                {
                    testimonials.map(testimonial => <SingleTestimonial key={testimonial._id} testimonial={testimonial}></SingleTestimonial>)
                }
            </div>
        </div>
    );
};

export default TestimonialArea;