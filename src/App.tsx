import Hero from "./components/Hero.jsx";
import Highlights from "./components/Highlights.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
	return (
		<main className="bg-dark">
			<Navbar />
			<Hero />
			<Highlights />
		</main>
	);
}

export default App;
