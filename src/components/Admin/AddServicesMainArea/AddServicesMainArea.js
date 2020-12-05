import React,{ useState } from 'react';
import SidebarAdmin from '../SidebarAdmin/SidebarAdmin';
import './AddServicesMainArea.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons';

const AddServicesMainArea = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = [e.target.value];
        setInfo(newInfo);
        console.log('Info', info);
    }
    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
        return file;
    }

    // Handle Submit
    const handleSubmit = e => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);
        fetch('https://desolate-oasis-15440.herokuapp.com/addservices',{
            method: 'POST', 
            body: formData
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

            {/* Add Service Form */}
            <div className="col-md-10 col-9">
                <div className="container">
                    <div className="row my-4">
                        <div className="col-md-12">

                            {/* Add Service Form */}
                            <form onSubmit={handleSubmit}>
                                <div className="addServiceForm bg-white p-4">
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label className="addServiceLabel" for="inputTitle">Service Title</label>
                                            <input onChange={handleBlur} name="title" className="form-control addServiceInput" type="text" placeholder="Enter title" id="inputTitle" aria-describedby="titleHelp" />
                                        </div>
                                        <div className="form-group col-md-3">
                                        <label className="addServiceLabel" for="inputIcon">Icon</label>
                                            <br/>
                                        <label className="custom-file-upload-service"><input onChange={handleFileChange} name="file" type="file"/><FontAwesomeIcon className="mr-2" icon={faCloudUploadAlt} />Upload image</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label className="addServiceLabel" for="inputDescription">Description</label>
                                            <textarea  maxlength="110" onChange={handleBlur} name="description" className="form-control addServiceInput" placeholder="Enter Description" id="inputDescription" rows="3"></textarea>
                                        </div>
                                        <div className="form-group col-md-6">
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-admin float-right mt-3">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddServicesMainArea;