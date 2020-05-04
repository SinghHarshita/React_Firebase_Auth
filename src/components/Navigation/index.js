import React from 'react'
import {Link} from 'react-router-dom'

import * as ROUTES from '../../constants/routes';

const Navigation = () => {
    return (
        <div className="header">
            <ul className="nav">
                <li className="nav-link">
                    <Link to={ROUTES.SIGN_IN}>Sign In</Link>
                </li>
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
                    <Link to={ROUTES.ADMIN}>Admin</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
