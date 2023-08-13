import React from "react";
import "../style/css/contact.css";

const Contact = () => {
	return (
		<section className="contact-section">
			<div className="contact-container contact-container-left">
				<span className="contact-container__span">
					Chcesz nawiązać współpracę?
				</span>
				<h2 className="contact-container__header">Skontaktuj się</h2>
				<a href="mailto:huberto956@gmail.com">
					<button className="contact-container__btn">
						Napisz{" "}
						<span className="material-symbols-outlined arrow">
							navigate_next
						</span>
					</button>
				</a>
			</div>
			<div className="contact-container contact-container-right">
				<div className="contact-container__mail">
					<span class="material-symbols-outlined mail-icon">mail</span>
					<span className="contact-span">huberto956@gmail.com</span>
				</div>
				<div className="contact-container__phone">
					<span class="material-symbols-outlined phone-icon">call</span>
					<span className="contact-span">+48 190 410 278</span>
				</div>
			</div>
		</section>
	);
};

export default Contact;
