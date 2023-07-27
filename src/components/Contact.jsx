import React from "react";
import "../style/css/contact.css";

const Contact = () => {
	return (
		<section className="contact-section">
			<div className="contact-container">
				<h2 className="contact-container__header">Skontaktuj się</h2>
				<button className="contact-container__btn">
					Napisz{" "}
					<span className="material-symbols-outlined arrow">navigate_next</span>
				</button>
			</div>
		</section>
	);
};

export default Contact;
