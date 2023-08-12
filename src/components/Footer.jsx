import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import "../style/css/footer.css";

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer-container__copyright-container">
				<span>Hubert Walkowski 2023 &copy; All rights reserved</span>
			</div>

			<div className="footer-container__socials">
				<i className="fa-brands fa-instagram"></i>
				<i className="fa-brands fa-facebook"></i>
				<i className="fa-brands fa-youtube"></i>
				<i className="fa-brands fa-tiktok"></i>
				<i className="fa-brands fa-soundcloud"></i>
			</div>
		</div>
	);
};

export default Footer;
