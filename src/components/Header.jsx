import React from "react";
import "../style/css/header.css";
import logoImg from "../img/hw-logo.png";

const Header = () => {
	return (
		<div className="header-container">
			<img src={logoImg} className="header-container__logo" />
			<h1 className="header-container__name">Hubert Walkowski</h1>
			<div className="lower-header">
				<div className="lower-header__dash"></div>
				<h2 className="lower-header__composer">Composer</h2>
				<div className="lower-header__dash"></div>
			</div>
		</div>
	);
};

export default Header;
