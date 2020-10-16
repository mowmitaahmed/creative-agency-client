import React from 'react';
import CustomerHeader from '../../Shared/SharedNav/CustomerHeader/CustomerHeader';
import AddServicesMainArea from '../AddServicesMainArea/AddServicesMainArea';

const AddServices = () => {
    return (
        <div className="container-fluid mainAreaOrder">
            <CustomerHeader></CustomerHeader>
            <AddServicesMainArea></AddServicesMainArea>
        </div>
    );
};

export default AddServices;