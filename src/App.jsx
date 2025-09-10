import './App.css';
import Navbar from './components/Navbar/Navbar';

const App = () => {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<h1 className="title">How's the sky looking today?</h1>
			</main>
		</>
	);
};

export default App;
