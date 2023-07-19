import React, { useEffect, useRef } from "react";
import "../style/css/music.css";

const Music = () => {
	useEffect(() => {}, []);
	return (
		<section className="music-section">
			<h3 className="music-section__header">Muzyka</h3>
			<div className="music-boxes-container">
				<div className="music-boxes-container__music-box box-1">
					<div className="music-boxes-container__shadow">
						<span className="box-text">
							Into the Wild - Orchestral composition <br />
							by Hubert Walkowski
						</span>
					</div>
					<div className="music-boxes-container__box-footer">
						<p>Eloo</p>
					</div>
				</div>
				<div className="music-boxes-container__music-box box-2">
					<div className="music-boxes-container__shadow">
						<span className="box-text">
							Lucid Dreams - Orchestral Composition <br />
							by Hubert Walkowski
						</span>
					</div>
					<div className="music-boxes-container__box-footer">
						<p>Eloo</p>
					</div>
				</div>
				<div className="music-boxes-container__music-box box-3">
					<div className="music-boxes-container__shadow">
						<span className="box-text">
							Muzyka do filmu "Pokot" <br /> Zwycięski utwór FMF Kraków 2019
						</span>
					</div>
					<div className="music-boxes-container__box-footer">
						<p>Eloo</p>
					</div>
				</div>
				<div className="music-boxes-container__music-box box-4">
					<div className="music-boxes-container__shadow">
						<span className="box-text">
							Muzyka do short-filmu "Abiogenesis"
							<br /> BIFSC - Berlin International Film Scoring Competition 2021
						</span>
					</div>
					<div className="music-boxes-container__box-footer">
						<p>Eloo</p>
					</div>
				</div>
				<div className="music-boxes-container__music-box box-5">
					<div className="music-boxes-container__shadow">
						<span className="box-text">
							Muzyka do short-filmu "Escape"
							<br /> BIFSC - Berlin International Film Scoring Competition 2020
						</span>
					</div>
					<div className="music-boxes-container__box-footer">
						<p>Eloo</p>
					</div>
				</div>
				<div className="music-boxes-container__music-box box-6">
					<div className="music-boxes-container__shadow">
						<span className="box-text">
							Muzyka do serialu "Westworld"
							<br /> Spitfire Scoring Competition 2021
						</span>
					</div>
					<div className="music-boxes-container__box-footer">
						<p>Eloo</p>
					</div>
				</div>
				<div className="music-boxes-container__music-box box-7">
					<div className="music-boxes-container__shadow">
						<span className="box-text">
							Ścieżka dźwiękowa do gry "coś tam"
							<br />
							MeanTime Games
						</span>
					</div>
					<div className="music-boxes-container__box-footer">
						<p>Eloo</p>
					</div>
				</div>
				<div className="music-boxes-container__music-box box-8">
					<div className="music-boxes-container__shadow">
						<span className="box-text">
							Muzyka do spektaklu "coś tam Offa"
							<br />
							AST Wrocław
						</span>
					</div>
					<div className="music-boxes-container__box-footer">
						<p>Eloo</p>
					</div>
				</div>
				<div className="music-boxes-container__music-box box-1">
					<div className="music-boxes-container__shadow">
						<span className="box-text">
							Into the Wild - Orchestral composition <br />
							by Hubert Walkowski
						</span>
					</div>
					<div className="music-boxes-container__box-footer">
						<p>Eloo</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Music;
