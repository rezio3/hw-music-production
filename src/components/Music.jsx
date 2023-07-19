import React, { useEffect, useRef } from "react";
import "../style/css/music.css";

const Music = () => {
	useEffect(() => {}, []);
	return (
		<section className="music-section">
			<div className="music-boxes-container music-boxes-container1">
				<div className="music-boxes-container__music-box box-1">
					<div className="music-boxes-container__shadow">
						<span className="box-text">
							Into the Wild - Orchestral composition
						</span>
					</div>
				</div>
				<div className="music-boxes-container__music-box box-2">
					<div className="music-boxes-container__shadow"></div>
				</div>
				<div className="music-boxes-container__music-box box-3">
					<div className="music-boxes-container__shadow"></div>
				</div>
				<div className="music-boxes-container__music-box box-4">
					<div className="music-boxes-container__shadow"></div>
				</div>
				<div className="music-boxes-container__music-box box-5">
					<div className="music-boxes-container__shadow"></div>
				</div>
				<div className="music-boxes-container__music-box box-6">
					<div className="music-boxes-container__shadow"></div>
				</div>
				<div className="music-boxes-container__music-box box-7">
					<div className="music-boxes-container__shadow"></div>
				</div>
				<div className="music-boxes-container__music-box box-8">
					<div className="music-boxes-container__shadow"></div>
				</div>
				<div className="music-boxes-container__music-box box-1">
					<div className="music-boxes-container__shadow"></div>
				</div>
			</div>
		</section>
	);
};

export default Music;
