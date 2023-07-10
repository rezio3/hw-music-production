import "./App.css";
import AboutMe from "./components/AboutMe";
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
		</div>
	);
}

export default App;
