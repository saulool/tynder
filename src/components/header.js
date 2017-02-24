import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
	return (
		<div className="navbar">
			<div className="container">
				<div className="logo">
					<Link className="logo-link" to="/">TYNDER</Link>
				</div>
				<div className="menu">
					<Link className="menu-item" to="likeds">Likeds</Link>
					<Link className="menu-item" to="dislikeds">Dislikeds</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;