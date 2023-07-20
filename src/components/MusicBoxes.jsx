import React from "react";

const MusicBox = (props) => {
	return (
		<div className={props.class}>
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
