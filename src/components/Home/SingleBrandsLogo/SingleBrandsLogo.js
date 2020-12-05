import React from 'react';
import './SingleBrandsLogo.css';

const SingleBrandsLogo = ({brandsLogo}) => {
    return (
        
        // Single Brands image
        <div className="col-md-2 mx-2 col-12">
            <img style={{width: '100%'}} src={brandsLogo.img} alt={brandsLogo.name} className="image-fluid"/>
        </div>
    );
};

export default SingleBrandsLogo;