import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css';

const SingleService = ({service}) => {

    return (

        // Single Service Card
        <div className="col-md-4 col-12 justify-content-center">
            <Link to="/order">
                <div className="SingleService text-center mb-4 hvr-grow-shadow">
                    <img src={`data:image/png;base64,${service.image.img}`} alt={service.title} className="img-fluid serviceLogo"/>
                    <h5 className="serviceTitle my-3">{service.title}</h5>
                    <p className="serviceDescription">{service.description}</p>
                </div>
            </Link>
        </div>
    );
};

export default SingleService;