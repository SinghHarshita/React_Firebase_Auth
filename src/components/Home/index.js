import React from 'react';
 
import { AuthUserContext, withAuthorization } from '../Session';
 
const HomePage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div className="container">
                <h1>Home Page</h1>
                <p>The Home Page is accessible by every signed in user.</p>
                <p>Welcome, {authUser.email}</p>
            </div>
        )}
    </AuthUserContext.Consumer>
  
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(HomePage);