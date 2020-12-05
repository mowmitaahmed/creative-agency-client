import React,{ useState,useEffect } from 'react';
import './OrderMainArea.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons'
import SidebarCustomer from '../SidebarCustomer/SidebarCustomer';

const OrderMainArea = () => {
    const [servicesData, setServicesData] = useState([]);
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = [e.target.value];
        newInfo.orderDate = new Date();
        newInfo.status = 0;
        setInfo(newInfo);
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
        return file;
    }

    // Handle Submit of Order Form for Customers
    const handleSubmit = e => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('service', info.service);
        formData.append('projectDetails', info.projectDetails);
        formData.append('price', info.price);
        formData.append('orderDate', info.orderDate);
        formData.append('status', info.status);

        // Saving Data in Database
        fetch('https://desolate-oasis-15440.herokuapp.com/addorders',{
            method: 'POST', 
            body: formData
        })
        .then( response => response.json())
        .then( data => console.log(data))
        .catch(error => {
            console.log(error);
        })
    }

    useEffect(()=>{

        // Geting data From Database
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
        <div className="row">

            {/* Sidebar for Customer */}
            <SidebarCustomer></SidebarCustomer>
            <div className="col-md-10 col-9">
                <div className="container">
                    <div className="row my-5 py-3">
                        <div className="col-md-6 col-10">

                            {/* Order Form for Customer */}
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input name="name" onBlur={handleBlur} type="text" required placeholder="Your name / company’s name" className="form-control" id="exampleInputName" aria-describedby="nameHelp" />
                                </div>
                                <div className="form-group">
                                    <input name="email" onBlur={handleBlur} type="email" required placeholder="Your email address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <select name="service" onBlur={handleBlur} required className="orderSelect">

                                        {/* Bootstrap Spinner */}
                                        {
                                            loading=== false && <option className="spinner-grow text-dark text-center"></option>
                                        }
                                        
                                        {/* Mapping Service in Select form */}
                                        {
                                            servicesData.map(service => <option key={service._id} value={service.title}>{service.title}</option>)
                                        }
                                        {/* <option  selected="selected" value="Graphics Design">Graphics Design</option> */}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea  maxlength="100" name="projectDetails" onBlur={handleBlur} required placeholder="Project Details" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <input name="price" onBlur={handleBlur} type="number" required placeholder="Price" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="form-group col-md-6">
                                       <label className="custom-file-upload"><input name="file" required onChange={handleFileChange} type="file"/><FontAwesomeIcon className="mr-2" icon={faCloudUploadAlt} />Upload project file</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-brand">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderMainArea;