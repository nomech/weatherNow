import './App.css';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import Error from './components/Error/Error';
import HourlyForecast from './components/HourlyForecast/HourlyForecast';
import { useWeather } from './contexts/weather';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import DailyForecast from './components/DailyForecast/DailyForecast';

const App = () => {
	const { current, hourly, daily, isLoading, error } = useWeather();

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
				<WeatherInfo data={current} isLoading={isLoading} />
				<WeatherDetails weatherData={current} isLoading={isLoading} />
				<DailyForecast weatherData={daily} isLoading={isLoading} />
				<HourlyForecast hourlyData={hourly} isLoading={isLoading} />
			</main>
		</>
	);
};

export default App;
