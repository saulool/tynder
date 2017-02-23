import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
	return (
		<div className="navbar">
			<div className="container">
				<Link to="/">TYNDER</Link>
				<Link to="likeds">Likeds</Link>
				<Link to="dislikeds">Dislikeds</Link>
			</div>
		</div>
	);
}

export default Header;