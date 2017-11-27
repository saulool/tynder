import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
	return (
		<div className="navbar">
			<div className="container">
				<div className="logo">
					<Link className="logo-link" to="/">BUDGET</Link>
				</div>
				<div className="menu">
					<Link className="menu-item" to="likeds">Home</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;