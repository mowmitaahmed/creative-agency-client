import React from 'react';
import CustomerHeader from '../../Shared/SharedNav/CustomerHeader/CustomerHeader';
import OrderMainArea from '../OrderMainArea/OrderMainArea';
import './OrderPage.css';

const OrderPage = () => {
    return (
        <div className="container-fluid mainAreaOrder">
            <CustomerHeader></CustomerHeader>
            <OrderMainArea></OrderMainArea>
        </div>
    );
};

export default OrderPage;