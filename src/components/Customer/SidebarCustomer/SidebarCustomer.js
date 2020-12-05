import React from 'react';
import './SidebarCustomer.css';
import {NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faShoppingBag, faCommentDots} from '@fortawesome/free-solid-svg-icons'

const SidebarCustomer = () => {
    const handleClick = (e) => {
        console.log('Target:',e);
        const text = e.target.innerHTML;
        console.log('Text:', text);
    }
    return (
        <div className="col-md-2 col-3 customerSidebar">
            <div className="sidebarMenu my-4">
                <div className="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink onClick={(e)=>handleClick} className="nav-link" to="/order" activeClassName="active"><FontAwesomeIcon className="mr-2" icon={faShoppingCart} />Order</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={(e)=>handleClick} className="nav-link" to="/servicelist" activeClassName="active"><FontAwesomeIcon className="mr-2" icon={faShoppingBag} />Service list</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={(e)=>handleClick} className="nav-link" to="/review" activeClassName="active"><FontAwesomeIcon className="mr-2" icon={faCommentDots} />Review</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SidebarCustomer;