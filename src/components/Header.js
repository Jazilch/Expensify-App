import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<header className="header">
		<div className="content-container">
		  <div className="header__content">
		    <h1>Expensify</h1>
					<nav>
						<NavLink to="/" activeClassName="is-active" exact>Home</NavLink>
						<NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
						<NavLink to="/help" activeClassName="is-active">Help</NavLink>
					</nav>
				</div>
			</div>
	</header>
);

export default Header;