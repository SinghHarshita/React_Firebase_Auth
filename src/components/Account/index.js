import React from 'react';
 
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import {  AuthUserContext, withAuthorization } from '../Session';
 
const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div className="container">
                <h1>Account: {authUser.email}</h1>
                {/* <p>{authUser.password}</p> */}
                <PasswordForgetForm />
                <br />
                <PasswordChangeForm />
            </div>
        )}
    </AuthUserContext.Consumer>
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(AccountPage);