import React from 'react';
import CustomerHeader from '../../Shared/SharedNav/CustomerHeader/CustomerHeader';
import ReviewPageMain from '../ReviewPageMain/ReviewPageMain';

const ReviewPage = () => {
    return (
        <div className="container-fluid mainAreaOrder">
            <CustomerHeader></CustomerHeader>
            <ReviewPageMain></ReviewPageMain>
        </div>
    );
};

export default ReviewPage;