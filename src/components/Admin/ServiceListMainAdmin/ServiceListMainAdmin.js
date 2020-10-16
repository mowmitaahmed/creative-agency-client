import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SidebarAdmin from '../SidebarAdmin/SidebarAdmin';
import SingleServiceTable from '../SingleServiceTable/SingleServiceTable';
import './ServiceListMainAdmin.css';


const ServiceListMainAdmin = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{

        // Fetching Orders placed by customers from database
        fetch('https://desolate-oasis-15440.herokuapp.com/orderList',{
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

            {/* Sidebar */}
            <SidebarAdmin></SidebarAdmin>

            {/* Order List Area */}
            <div className="col-md-10 col-9">
                <div className="container">
                    <div className="row my-4">
                        <div className="col-md-12 col-12">
                            <div className="serviceListTable bg-white p-3">

                                {/* Order List Table */}
                                <table class="table table-borderless">
                                    <thead className="serviceTableHeader">
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email ID</th>
                                            <th scope="col">Service</th>
                                            <th scope="col">Project Details</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="serviceTableBody"> 

                                        {/* Bootstrap Spinner */}
                                        {
                                            loading === false && <tr className="col-md-12 col-12 spinner-grow text-dark text-center py-5 my-5"></tr>
                                        }

                                        {/* Mapping Data */}
                                        {
                                            loading && orders.map(order => <SingleServiceTable key={order._id} order={order}></SingleServiceTable>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceListMainAdmin;