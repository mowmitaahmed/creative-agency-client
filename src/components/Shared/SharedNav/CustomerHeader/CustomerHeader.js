import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../../App';
import Logo from '../../../../images/logos/logo.png'
import './CustomerHeader.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../../Login/Login/firebase.config';

const CustomerHeader = () => {  
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // Firebase code
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }    

    // Getting Items from Session Storage
    const  isSignedIn = sessionStorage.getItem('isSignedIn');
    const name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');
    const img = sessionStorage.getItem('img');
    
    // Google Sign Out
    const handleGoogleSignOut = () => {
        firebase.auth().signOut().then(function() {
            sessionStorage.removeItem('name');
            sessionStorage.removeItem('email');
            sessionStorage.removeItem('img');
            sessionStorage.removeItem('isSignedIn');
            history.push("/login");
          }).catch(function(error) {
            // An error happened.
          });
      }
    return (
        <div className="row bg-white">

            {/* Dashboard Logo */}
            <div className="col-md-2 col-4">
                <div className="logoArea my-4">
                    <Link to="/"><img src={Logo} alt="Logo"/></Link>
                </div>
            </div>
            <div className="col-md-10 col-8">
                <div className="container">
                    <div className="row d-flex justify-content-between my-4">

                        {/* Page Heading */}
                        <div className="col-md-6 col-3">
                            <h5 className="orderPageTitle">Order</h5>
                        </div>
                        <div className="col-md-6 col-9">
                            {/* Logout Button */}
                            {
                               isSignedIn && <button onClick={handleGoogleSignOut} type="submit" className="btn btn-brand float-right ml-4">Log Out</button>
                            }

                            {/* Profile Name */}
                            {
                                isSignedIn && <h5 className="float-right orderPageProfileName my-2">{name}</h5>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerHeader;