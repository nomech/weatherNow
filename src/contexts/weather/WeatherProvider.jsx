import { useFetch } from '../../hooks/useFetch';
import { useEffect, useMemo, useState } from 'react';
import { WeatherContext } from './WeatherContext';

export const WeatherProvider = ({ children }) => {
	const [url, setUrl] = useState(
		'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=relative_humidity_2m,precipitation,apparent_temperature,wind_speed_10m,temperature_2m'
	);
	const [location, setLocation] = useState(null);
	const [current, setCurrent] = useState(null);
	const [hourly, setHourly] = useState(null);

	const [params, setParams] = useState({
		temperature_unit: 'celsius',
		wind_speed_unit: 'kmh',
		precipitation_unit: 'mm',
	});

	const baseUrl = 'https://api.open-meteo.com';
	const version = 'v1';
	const queryType = 'forecast';

	const { data, error, isLoading } = useFetch(url);

	useEffect(() => {
		console.log(data);

		if (location) {
			setUrl(
				`${baseUrl}/${version}/${queryType}?latitude=${location.latitude}&longitude=${location.longitude}&temperature_unit=${params.temperature_unit}&wind_speed_unit=${params.wind_speed_unit}&precipitation_unit=${params.precipitation_unit}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=relative_humidity_2m,precipitation,apparent_temperature,wind_speed_10m,temperature_2m`
			);

			setCurrent({
				current: data.current,
				current_units: data.current_units,
			});
		}
	}, [location, params, data]);

	console.log(location);

	const weatherData = useMemo(() => ({ ...location, ...data }), [location, data]);
	const hourlyForecastData = useMemo(() => data?.hourly, [data?.hourly]);

	console.log(weatherData);

	return (
		<WeatherContext.Provider
			value={{
				weatherData,
				current,
				hourlyForecastData,
				error,
				isLoading,
				setParams,
				setLocation,
			}}
		>
			{children}
		</WeatherContext.Provider>
	);
};
