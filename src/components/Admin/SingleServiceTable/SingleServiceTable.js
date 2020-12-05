import React from 'react';
import { useForm } from "react-hook-form";

const SingleServiceTable = ({order}) => {

  // React Hook Form
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const id =order._id;
    
    // Updating Order Status in Databse
    fetch(`https://desolate-oasis-15440.herokuapp.com/update/${id}`,{
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then( response => response.json())
    .then( data => {
      console.log('Updated', data);
      window.location.reload();
    })
    .catch(error => {
        console.log(error);
    });

    };

    return (

        // Order List Table Single Row
        <tr>
            <td className="text-dark" scope="row">{order.name}</td>
            <td className="text-dark">{order.email}</td>
            <td className="text-dark">{order.service}</td>
            <td className="text-dark">{order.projectDetails}</td>

            {/* Status Button */}
            <td>{(() => {
                switch (order.status) {
                case "1":   return <select onChange={handleSubmit(onSubmit)} ref={register} name="status" className="btn-select text-done">
                                      <option selected="selected" className="text-done" value="1">Done</option>
                                      <option className="text-pending" value="0">Pending</option>
                                      <option className="text-onGoing" value="2">On Going</option>
                                    </select>;
                case "0": return <select onChange={handleSubmit(onSubmit)} ref={register} name="status" className="btn-select text-pending">
                                      <option className="text-done" value="1">Done</option>
                                      <option selected="selected" className="text-pending" value="0">Pending</option>
                                      <option className="text-onGoing" value="2">On Going</option>
                                    </select>;
                case "2":  return <select onChange={handleSubmit(onSubmit)} ref={register} name="status" className="btn-select text-onGoing">
                                  <option className="text-done" value="1">Done</option>
                                  <option className="text-pending" value="0">Pending</option>
                                  <option selected="selected" className="text-onGoing" value="2">On Going</option>
                                </select>;
                default:  return <select onChange={handleSubmit(onSubmit)} ref={register} name="status" className="btn-select text-pending">
                                    <option className="text-done" value="1">Done</option>
                                    <option selected="selected" className="text-pending" value="0">Pending</option>
                                    <option className="text-onGoing" value="2">On Going</option>
                                  </select>;
                }
            })()}</td>
        </tr>
    );
};

export default SingleServiceTable;