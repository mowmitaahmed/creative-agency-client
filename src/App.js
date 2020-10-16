import React, {useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import OrderPage from './components/Customer/OrderPage/OrderPage';
import ServiceListCustomer from './components/Customer/ServiceListCustomer/ServiceListCustomer';
import ReviewPage from './components/Customer/ReviewPage/ReviewPage';
import ServiceListAdmin from './components/Admin/ServiceListAdmin/ServiceListAdmin';
import AddServices from './components/Admin/AddServices/AddServices';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import Login from './components/Login/Login/Login';
import { createContext } from 'react';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({name: '', email: '' , img: '', isSignedIn: false});
    const admin = sessionStorage.getItem('admin');
    const email = sessionStorage.getItem('email');
    const adminDash = admin===email;
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <PrivateRoute path="/order">
                        <OrderPage title="Order"></OrderPage>
                </PrivateRoute>
                <PrivateRoute path="/servicelist">
                        <ServiceListCustomer title="Services"></ServiceListCustomer>
                </PrivateRoute>
                <PrivateRoute path="/review" title="Review">
                        <ReviewPage></ReviewPage>
                </PrivateRoute>
                <PrivateRoute path="/servicelistadmin">
                    {
                        adminDash ? <ServiceListAdmin></ServiceListAdmin> : <OrderPage></OrderPage>
                    }
                </PrivateRoute>
                <PrivateRoute path="/addservices">
                    {
                        adminDash ? <AddServices></AddServices> : <OrderPage></OrderPage>
                    }
                </PrivateRoute>
                <PrivateRoute path="/makeadmin">
                    {
                        adminDash ? <MakeAdmin></MakeAdmin> : <OrderPage></OrderPage>
                    }
                </PrivateRoute>
                <Route path="/login">
                    <Login></Login>
                </Route>
            </Switch>
        </Router>
    </UserContext.Provider>
  );
}

export default App;
