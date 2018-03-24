import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => (
	<header>
		<h1>Expensify</h1>
		<nav>
			<NavLink to="/" activeClassName="is-active" exact>Home</NavLink>
			<NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
			<NavLink to="/help" activeClassName="is-active">Help</NavLink>
		</nav>
	</header>
);

export default Header;