import React, {useState} from 'react';
import SidebarCustomer from '../SidebarCustomer/SidebarCustomer';

const ReviewPageMain = () => {  
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null); 

    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = [e.target.value];
        newInfo.date = new Date();
        newInfo.img = sessionStorage.getItem('img');
        setInfo(newInfo);
        console.log('Info', info);
    }

    // Form Submit
    const handleSubmit = e => {
        const formData = new FormData();
        
        formData.append('name', info.name);
        formData.append('designation', info.designation);
        formData.append('description', info.description);
        formData.append('date', info.date);
        formData.append('img', info.img);

        // getting  data from database
        fetch('https://desolate-oasis-15440.herokuapp.com/addreviews',{
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

            {/* Sidebar for Customer */}
            <SidebarCustomer></SidebarCustomer>
            <div className="col-md-10 col-9">
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-6">

                            {/* Review Form */}
                            <form onSubmit={handleSubmit}>
                                <div class="form-group">
                                    <input onBlur={handleBlur} name="name" type="text" placeholder="Your name" class="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                                </div>
                                <div class="form-group">
                                    <input onBlur={handleBlur} name="designation" type="text" placeholder="Company’s name, Designation" class="form-control" id="exampleInputDesignation" aria-describedby="emailHelp" />
                                </div>
                                <div class="form-group">
                                    <textarea  maxlength="110" onBlur={handleBlur} name="description" placeholder="Description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button type="submit" class="btn btn-brand">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewPageMain;