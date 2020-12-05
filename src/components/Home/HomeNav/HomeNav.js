import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../../images/logos/logo.png';
import './HomeNav.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Login/Login/firebase.config';

const HomeNav = () => {  
    const history = useHistory();

    // Firebase
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }   

    // SessionStorage
    const isLoggedIn = sessionStorage.getItem('isSignedIn');
    const name = sessionStorage.getItem('name');

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
        <div className="container">
            <div className="row">
                <div className="col-md-12">

                    {/* Home Navbar */}
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link className="navbar-brand" to="/"><img className="logo" src={Logo} alt="Logo"/></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse my-4" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Our Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Our Team</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>
                                {
                                    isLoggedIn && 
                                    <li className="nav-item font-weight-bold">
                                        <a className="nav-link" href="#">{name}</a>
                                    </li>
                                }
                            </ul>
                            {
                                isLoggedIn ? <button onClick={handleGoogleSignOut} className="btn btn-brand my-2 my-sm-0 ml-2" type="submit">Log Out</button> : <Link to="/login"><button className="btn btn-brand my-2 my-sm-0 ml-2" type="submit">Login</button></Link>
                            }
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default HomeNav;