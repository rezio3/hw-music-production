import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Header />
			<AboutMe />
		</div>
	);
}

export default App;
