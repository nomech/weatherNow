import './App.css';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import Error from './components/Error/Error';
import HourlyForecast from './components/HourlyForecast/HourlyForecast';
import { useWeather } from './contexts/weather';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';

const App = () => {
	const { weatherData, hourlyForecastData, isLoading, error } = useWeather();

	if (error) {
		return <Error />;
	}

	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<h1 className="title">How's the sky looking today?</h1>
				<Searchbar />
				<WeatherInfo data={weatherData} isLoading={isLoading} />
				<HourlyForecast hourlyForecastData={hourlyForecastData} isLoading={isLoading} />
				<WeatherDetails />
			</main>
		</>
	);
};

export default App;
