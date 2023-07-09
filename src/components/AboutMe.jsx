import React from "react";
import "../style/css/aboutme.css";
import portraitImg from "../img/hw-bio-img.jpg";

const AboutMe = () => {
	return (
		<section className="about-me-section">
			<img src={portraitImg} width={500} className="about-me-section__img" />
			<div className="about-me-section__text">
				<h2 className="about-me-section__header">O mnie</h2>
				<p className="about-me-section__details">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
					doloremque? Aliquam, modi veritatis! Non explicabo praesentium culpa
					cum veniam a cumque laudantium vel, eius eligendi odit impedit
					molestiae deleniti rem incidunt sapiente pariatur possimus dolores
					facilis nisi cupiditate dignissimos facere! Sint id molestiae pariatur
					necessitatibus natus nemo expedita sed odio suscipit eaque. Quisquam
					quo eum sint recusandae aliquid aperiam ipsum.
				</p>
			</div>
		</section>
	);
};

export default AboutMe;
