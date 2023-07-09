import React from "react";
import "../style/css/skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTelevision,
	faTheaterMasks,
	faGamepad,
	faMusic,
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
	return (
		<section className="skills-section">
			<ul className="skills-container">
				<li className="skills-container__skill">
					<FontAwesomeIcon icon={faTelevision} className="icon" />
					<span>Film & TV</span>
				</li>
				<li className="skills-container__skill">
					<FontAwesomeIcon icon={faTheaterMasks} className="icon" />
					<span>Theatre</span>
				</li>
				<li className="skills-container__skill">
					<FontAwesomeIcon icon={faGamepad} className="icon" />
					<span>Games</span>
				</li>
				<li className="skills-container__skill">
					<FontAwesomeIcon icon={faMusic} className="icon" />
					<span>Orchestra</span>
				</li>
			</ul>
		</section>
	);
};

export default Skills;
