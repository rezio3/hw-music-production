import React, { useEffect, useState } from "react";
import "../style/css/music.css";
import MusicBox from "./MusicBoxes";
import { musicBoxesData } from "./music-boxes-data";

const Music = () => {
	const [boxContent, setBoxContent] = useState(musicBoxesData);
	useEffect(() => {}, []);
	return (
		<section className="music-section">
			<h3 className="music-section__header">Muzyka</h3>
			<div className="music-boxes-container">
				{boxContent.map((e) => {
					return (
						<MusicBox
							class={e.className}
							txt1={e.txt1}
							txt2={e.txt2}
							key={e.id}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Music;
