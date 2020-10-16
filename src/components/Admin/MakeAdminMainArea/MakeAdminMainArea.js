import React from 'react';
import SidebarAdmin from '../SidebarAdmin/SidebarAdmin';
import './MakeAdminMainArea.css';
import { useForm } from "react-hook-form";

const MakeAdminMainArea = () => {

    const { register, handleSubmit } = useForm();

    // React Hook Form 
    const onSubmit = (data) => {
        
        // Saving forms data in Databse
        fetch('https://desolate-oasis-15440.herokuapp.com/addadmins',{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then( response => response.json())
        .then( data => console.log(data))
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="row">

            {/* Sidebar */}
            <SidebarAdmin></SidebarAdmin>

            {/* Make Admin Form Area */}
            <div className="col-md-10 col-9">
                <div className="container">
                    <div className="row my-4">
                        <div className="col-md-7">

                            {/* Make Admin Form */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label className="addServiceLabel" for="inputTitle">Email</label>
                                <div className="form-inline makeAdminInput">
                                    <input name="email" ref={register} className="addServiceInput" type="text" placeholder="jon@gamil.com" class="form-control" id="inputTitle" aria-describedby="titleHelp" />
                                    <button type="submit" class="btn btn-admin ml-2">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdminMainArea;