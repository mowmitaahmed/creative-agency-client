import React from 'react';
import CustomerHeader from '../../Shared/SharedNav/CustomerHeader/CustomerHeader';
import ServiceListMain from '../ServiceListMain/ServiceListMain';

const ServiceListCustomer = () => {
    return (
        <div className="container-fluid mainAreaOrder">
            <CustomerHeader></CustomerHeader>
            <ServiceListMain></ServiceListMain>
        </div>
    );
};

export default ServiceListCustomer;