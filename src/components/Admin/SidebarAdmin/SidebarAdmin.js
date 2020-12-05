import React from 'react';
import './SidebarAdmin.css';
import {NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faPlus, faUserPlus} from '@fortawesome/free-solid-svg-icons'


const SidebarAdmin = () => {
    return (
        <div className="col-md-2 col-3 customerSidebar">
            <div className="sidebarMenu my-4">

                {/* Sidebar Nav for Admin */}
                <div className="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/servicelistadmin"><FontAwesomeIcon className="mr-2" icon={faShoppingBag} />Service list</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/addservices"><FontAwesomeIcon className="mr-2" icon={faPlus} />Add Service</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/makeadmin"><FontAwesomeIcon className="mr-2" icon={faUserPlus} />Make admin</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SidebarAdmin;