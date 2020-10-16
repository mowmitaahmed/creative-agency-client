import React from 'react';
import './SingleServiceList.css'

const SingleServiceList = ({order}) => {
    return (
        <div className="col-md-6 mb-4 col-12">

            {/* Single Service Card in Customer Dashboard */}
            <div className="singleServiceList p-4">
                <div className="serviceListUpper d-flex justify-content-between">
                    <img  src={`data:image/png;base64,${order.imageOrder.imgOrder}`} alt={order.service}/>
                   {(() => {
                        switch (order.status) {
                        case "1":   return <button className="btn btn-done">Done</button>;
                        case "0": return <button className="btn btn-pending">Pending</button>;
                        case "2":  return <button className="btn btn-onGoing">On Going</button>;
                        default:  return <button className="btn btn-pending">Pending</button>;
                        }
                    })()}
                </div>
                <div className="serviceListLower mt-4">
                    <h5>{order.service}</h5>
                    <p className="pt-2">{order.projectDetails}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceList;