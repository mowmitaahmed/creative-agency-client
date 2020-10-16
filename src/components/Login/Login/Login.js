import React,{ useContext,useState } from 'react';
import './Login.css';
import Logo from '../../../images/logos/logo.png';
import GoogleLogo from '../../../images/logos/GoogleLogo.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';

const Login = () => {     
  const [admin, setAdmin] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    
    // Private Route Code
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // Firebase Code
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }  

  // Google Sign In
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(result => {

      const { displayName, email, photoURL } = result.user;
      const signedInUser = { name: displayName, email , img: photoURL, isSignedIn: true};
      sessionStorage.setItem('name', displayName);
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('img', photoURL);
      sessionStorage.setItem('isSignedIn', true);
      setLoggedInUser(signedInUser);

      // Fetching Admins email from Databse
      const loggedUser = sessionStorage.getItem('email');
        fetch('https://desolate-oasis-15440.herokuapp.com/adminList?email='+loggedUser,{
          method: 'GET',
          headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      })
      .then(res => res.json())
      .then(data => {
        if (data.length>0) {
          sessionStorage.setItem('admin', loggedUser)
          history.push("/servicelistadmin")
        }
        else{
          // history.replace(from);
          history.push("/order");
        }
      })

    }).catch(error => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

    return (
        <div className="container">

            {/* Login Page Logo */}
            <div className="row mt-5 mb-3">
                <div className="col-md-5 col-4"></div>
                <div className="col-md-2 col-4">
                    <Link to="/"><img className="loginLogo" src={Logo} alt="Logo"/></Link> 
                </div>
                <div className="col-md-5 col-4"></div>
            </div>

            {/* Login Form */}
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="loginArea p-5 justify-content-center">
                        <h3 className="text-center text-black mt-5 pt-5">Login With</h3>
                        <button onClick={handleGoogleSignIn} className="btn mt-4"><img src={GoogleLogo} alt="GoogleLogo"/> <span>Continue with Google</span></button>
                        <p className="text-center pt-3">Don’t have an account? <a href="#">Create an account</a></p>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default Login;