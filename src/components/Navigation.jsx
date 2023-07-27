import React from "react";
import "../style/css/navigation.css";
import { useScrollTo } from "react-use-window-scroll";

const Navigation = () => {
	const scrollTo = useScrollTo();
	const scrollDownAboutMe = () => {
		scrollTo({
			top: 990,
			left: 0,
			behavior: "smooth",
		});
	};
	const scrollDownMusic = () => {
		scrollTo({
			top: 2200,
			left: 0,
			behavior: "smooth",
		});
	};
	const scrollDownFilm = () => {
		scrollTo({
			top: 4200,
			left: 0,
			behavior: "smooth",
		});
	};
	const scrollDownContact = () => {
		scrollTo({
			top: 5700,
			left: 0,
			behavior: "smooth",
		});
	};
	return (
		<nav className="nav-container">
			<ul className="nav-buttons">
				<li className="nav-buttons__button" onClick={scrollDownAboutMe}>
					O mnie
				</li>
				<li className="nav-buttons__button" onClick={scrollDownMusic}>
					Muzyka
				</li>
				<li className="nav-buttons__button" onClick={scrollDownFilm}>
					Film & TV
				</li>
				<li className="nav-buttons__button" onClick={scrollDownContact}>
					Kontakt
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
