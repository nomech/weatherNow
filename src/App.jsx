import './App.css';
import { useFetch } from './hooks/useFetch';

import Navbar from './components/Navbar/Navbar';

const App = () => {
	const { data, error, isLoading } = useFetch(
		'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m'
	);

	console.log(data, error, isLoading);

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
