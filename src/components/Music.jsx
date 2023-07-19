import React, { useEffect, useRef } from "react";
import "../style/css/music.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Music = () => {
	// const scrollContainer1 = useRef(null);
	// const scrollContainer2 = useRef(null);
	// const scrollContainer3 = useRef(null);
	// const scrollContainerBG = useRef(null);
	useEffect(() => {
		// let el = scrollContainer1.current;
		// gsap.to(el, {
		// 	xPercent: -100 * 1,
		// 	// translateY: "0px",
		// 	ease: "none",
		// 	scrollTrigger: {
		// 		trigger: ".music-boxes-container1",
		// 		scrub: true,
		// 		// pin: true,
		// 		start: "top bottom",
		// 		end: "+=1500",
		// 	},
		// });
		// let el2 = scrollContainer2.current;
		// gsap.to(el2, {
		// 	xPercent: -100 * -1,
		// 	// translateY: "0px",
		// 	ease: "none",
		// 	scrollTrigger: {
		// 		trigger: ".music-boxes-container2",
		// 		scrub: true,
		// 		// pin: true,
		// 		start: "top bottom",
		// 		end: "+=1500",
		// 	},
		// });
		// let el3 = scrollContainer3.current;
		// gsap.to(el3, {
		// 	xPercent: -100 * 1,
		// 	// translateY: "0px",
		// 	ease: "none",
		// 	scrollTrigger: {
		// 		trigger: ".music-boxes-container3",
		// 		scrub: true,
		// 		// pin: true,
		// 		start: "top bottom",
		// 		end: "+=1500",
		// 	},
		// });
	}, []);
	return (
		<section className="music-section">
			<div
				className="music-boxes-container music-boxes-container1"
				ref={scrollContainer1}
			>
				<div className="music-boxes-container__music-box box-1">
					<div className="music-boxes-container__shadow">
						{/* <h2 className="box-header">Into the Wild - Orchestral composition</h2> */}
					</div>
				</div>
				<div className="music-boxes-container__music-box box-2"></div>
				<div className="music-boxes-container__music-box box-3"></div>
			</div>
			<div
				className="music-boxes-container music-boxes-container2"
				ref={scrollContainer2}
			>
				<div className="music-boxes-container__music-box box-4"></div>
				<div className="music-boxes-container__music-box box-5"></div>
				<div className="music-boxes-container__music-box box-6"></div>
			</div>
			<div
				className="music-boxes-container music-boxes-container3"
				ref={scrollContainer3}
			>
				<div className="music-boxes-container__music-box box-7"></div>
				<div className="music-boxes-container__music-box box-8"></div>
				<div className="music-boxes-container__music-box box-1"></div>
			</div>
		</section>
	);
};

export default Music;
