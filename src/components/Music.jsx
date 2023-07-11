import React, { useEffect, useRef } from "react";
import "../style/css/music.css";
// import { TweenMax } from "gsap/gsap-core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const Music = () => {
	// const scrollContainer = useRef(null);
	// console.log(scrollContainer);
	// useEffect(() => {
	// 	let el = scrollContainer.current;
	// 	gsap.to(el, {
	// 		xPercent: -10,
	// 		ease: "none",
	// 		scrollTrigger: {
	// 			trigger: ".music-boxes-container",
	// 			pin: true,
	// 			scrub: 1,
	// 			end: "+=10",
	// 		},
	// 	});
	// }, []);
	return (
		<section className="music-section">
			<div className="music-boxes-container">
				<div className="music-boxes-container__music-box box-1"></div>
				<div className="music-boxes-container__music-box box-2"></div>
				<div className="music-boxes-container__music-box box-3"></div>
				<div className="music-boxes-container__music-box box-4"></div>
				<div className="music-boxes-container__music-box box-5"></div>
				<div className="music-boxes-container__music-box box-6"></div>
				<div className="music-boxes-container__music-box box-7"></div>
				<div className="music-boxes-container__music-box box-8"></div>
			</div>
		</section>
	);
};

export default Music;
