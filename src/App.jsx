import './App.css';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';

const App = () => {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<h1 className="title">How's the sky looking today?</h1>
				<Searchbar />
			</main>
		</>
	);
};

export default App;
