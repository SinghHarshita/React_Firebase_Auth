import React from 'react'
import {Link} from 'react-router-dom'

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
const Navigation = ({ authUser }) => (
    <div className='header'>
        {authUser ? <NavigationAuth /> : <NavigationNonAuth />}
        {/* {authUser.LocalId} */}
    </div>
);

const NavigationAuth = () => (
    <ul className="nav">
        <li className="nav-link">
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li className="nav-link">
            <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li className="nav-link">
            <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li className="nav-link">
            <SignOutButton />
        </li>
        {/* <li>{authUser}</li> */}
    </ul>
);

const NavigationNonAuth = () => (
    <ul className="nav">
        <li className="nav-link">
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li className="nav-link">
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
        {/* <li>{this.props.authUser}</li> */}
    </ul>
);

export default Navigation;
