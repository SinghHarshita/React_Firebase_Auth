import React from 'react';
 
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
 
const AccountPage = () => (
  <div className="container">
    <h1>Account Page</h1>
    <PasswordForgetForm />
    <br />
    <PasswordChangeForm />
  </div>
);
 
export default AccountPage;