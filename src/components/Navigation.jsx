import React from "react";
import "../style/css/navigation.css";

const Navigation = () => {
	return (
		<nav className="nav-container">
			<ul className="nav-buttons">
				<li className="nav-buttons__button">O mnie</li>
				<li className="nav-buttons__button">Muzyka</li>
				<li className="nav-buttons__button">Film & TV</li>
				<li className="nav-buttons__button">Kontakt</li>
			</ul>
		</nav>
	);
};

export default Navigation;
