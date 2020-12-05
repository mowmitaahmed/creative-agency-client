import React from 'react';
import CustomerHeader from '../../Shared/SharedNav/CustomerHeader/CustomerHeader';
import ServiceListMainAdmin from '../ServiceListMainAdmin/ServiceListMainAdmin';

const ServiceListAdmin = () => {
    return (
        <div className="container-fluid mainAreaOrder">
            <CustomerHeader></CustomerHeader>
            <ServiceListMainAdmin></ServiceListMainAdmin>
        </div>
    );
};

export default ServiceListAdmin;