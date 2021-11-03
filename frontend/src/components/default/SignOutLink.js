import React from 'react';
import { Link } from 'react-router-dom';

import SignOutIcon from '../../assets/images/sign-out.png';

export default function SignOutLink() {
	return (
		<li>
            <Link className="menu__item" to="/sign-out">
                <img className="sign-out-icon" src={SignOutIcon} alt="" />
                Sign Out
            </Link>
        </li>
	);
}
