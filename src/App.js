import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import FilmAndTV from "./components/FilmAndTV";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Music from "./components/Music";
import Navigation from "./components/Navigation";
import Skills from "./components/Skills";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Header />
			<AboutMe />
			<Skills />
			<Music />
			<FilmAndTV />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
