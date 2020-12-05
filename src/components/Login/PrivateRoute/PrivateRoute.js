import React from 'react';
// import { useContext } from 'react';
// import { UserContext } from '../../../App';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // Quering from sessionStorage
    const isSignedIn = sessionStorage.getItem('isSignedIn');
    return (

      // Private Route Code
        <Route
        {...rest}
        render={({ location }) =>
        isSignedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;