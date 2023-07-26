import React, { useEffect, useState, useRef } from "react";

const MusicBox = (props) => {
	const [anim, setAnim] = useState(props.class);
	const [animDone, setAnimDone] = useState(false);
	const musicBoxes = useRef();

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];

			if (!animDone) {
				if (entry.isIntersecting) {
					setAnim(props.class + " music-box-anim-in");
					setAnimDone(true);
				} else if (animDone) {
					setAnim(props.class);
				}
			}
		});
		observer.observe(musicBoxes.current);
	}, []);

	console.log(anim);
	return (
		<div className={anim} ref={musicBoxes}>
			<div className="music-boxes-container__shadow">
				<span className="box-text">{props.txt1}</span>
				<span className="box-text">{props.txt2}</span>
			</div>
			<div className="music-boxes-container__box-footer">
				<p>Eloo</p>
			</div>
		</div>
	);
};

export default MusicBox;
