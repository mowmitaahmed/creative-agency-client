import React, { useState, useEffect } from 'react';
import SidebarCustomer from '../SidebarCustomer/SidebarCustomer';
import './ServiceListMain.css';
import SingleServiceList from '../SingleServiceList/SingleServiceList';

const ServiceListMain = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    // Session Storage
    const email = sessionStorage.getItem('email');

    useEffect(()=>{

        // geting data from database
        fetch('https://desolate-oasis-15440.herokuapp.com/customerOrderList?email='+email,{
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            setOrders(data);
            setLoading(true);
        })
    },[])
    return (
        <div className="row">
            
            {/* Sidebar for customer */}
            <SidebarCustomer></SidebarCustomer>
            <div className="col-md-10 col-9">
                <div className="container">

                    {/* Bootstrap Spinner */}
                    {
                        loading=== false && <div className="row"><div className="col-md-5"></div><div className="col-md-1 spinner-grow text-dark text-center py-5 my-5"></div><div className="col-md-6"></div></div>
                    }
                    <div className="row my-5">

                        {/* Mapping data from database */}
                        {
                            loading &&  orders.map(order => <SingleServiceList key={order._id} order={order}></SingleServiceList>)
                        }
                         
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceListMain;