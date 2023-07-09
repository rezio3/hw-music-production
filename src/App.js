import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Skills from "./components/Skills";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Header />
			<AboutMe />
			<Skills />
		</div>
	);
}

export default App;
