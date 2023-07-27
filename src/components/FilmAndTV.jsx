import React from "react";
import "../style/css/filmtv.css";

const FilmAndTV = () => {
	return (
		<section className="film-and-tv-section">
			<h2 className="film-and-tv-section__header">Film & TV</h2>

			<div className="film-and-tv-content">
				<div className="film-and-tv-content__text-container">
					<div className="film-and-tv-section__spacer"></div>
					<p className="film-and-tv-content__text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
						laudantium vel explicabo nemo ullam necessitatibus accusamus
						officiis aliquid illum dolorem id, fuga adipisci non suscipit quae
						laborum repudiandae quia facilis veritatis dicta ex placeat
						perferendis cupiditate laboriosam! Totam odit cupiditate ullam in,
						quam rem commodi similique dicta aperiam blanditiis hic.
					</p>
					<button className="film-and-tv-content__btn">
						Sprawdź{" "}
						<span className="material-symbols-outlined arrow">
							navigate_next
						</span>
					</button>
				</div>

				<span class="material-symbols-outlined tv-icon">smart_display</span>
			</div>
		</section>
	);
};

export default FilmAndTV;
