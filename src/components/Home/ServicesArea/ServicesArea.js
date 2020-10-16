import React, { useState,useEffect  } from 'react';
import './ServicesArea.css';
import SingleService from '../SingleService/SingleService';


const ServicesArea = () => {
    const [servicesData, setServicesData] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetching Service List in Home Page From Databse
    useEffect(()=>{
        fetch('https://desolate-oasis-15440.herokuapp.com/serviceList',{
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            setServicesData(data);
            setLoading(true);
        })
    },[])
    return (
        <div className="container my-5 py-3">

            {/* Service List Area Heading */}
            <div className="row mt-3">
                <div className="col-md-12 text-center">
                   <h1 className="AreaTitle text-black">Provide awesome <span className="text-green">services</span></h1>
                </div>
            </div>

            {/* Service List Area in Home Page */}
            <div className="row my-5 py-3">  

                    {/* Bootstrap Spinner */}
                    {
                        loading === false && <div className="col-md-12 col-12 spinner-grow text-warning text-center py-5 my-5"></div>
                    }

                    {/* Mapping Service List */}
                   {
                       servicesData.map(service => <SingleService service={service}></SingleService>)
                   }
            </div>
        </div>
    );
};

export default ServicesArea;