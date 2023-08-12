import React from "react";
import "../style/css/footer.css";

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer-container__copyright-container">
				<span>Hubert Walkowski 2023 &copy; All rights reserved</span>
			</div>

			<div className="footer-container__socials">
				<a href="https://www.instagram.com/hubert_walkowski/">
					<i className="fa-brands fa-instagram"></i>
				</a>
				<a href="https://www.facebook.com/hubertwalkowskicomposer">
					<i className="fa-brands fa-facebook"></i>
				</a>
				<a href="https://www.youtube.com/@hubertwalkowski931">
					<i className="fa-brands fa-youtube"></i>
				</a>
				<i className="fa-brands fa-tiktok"></i>
				<a href="https://soundcloud.com/hubert-walkowski-95">
					<i className="fa-brands fa-soundcloud"></i>
				</a>
			</div>
		</div>
	);
};

export default Footer;
