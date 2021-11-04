import React from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from '../../assets/images/search.svg';

export default function Search() {
	return (
		<li>
            <Link className="menu__item search" to="/">
                <div className="search-input">
                    <input className="custom-search-input" type="text" placeholder="Search"/>
                    <img className="search-icon" src={SearchIcon} alt="" />
                </div>
            </Link>
        </li>
	);
}
