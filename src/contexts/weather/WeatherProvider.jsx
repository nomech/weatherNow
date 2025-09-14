import { useFetch } from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import { WeatherContext } from './WeatherContext';

export const WeatherProvider = ({ children }) => {
	const [url, setUrl] = useState(null);
	const [location, setLocation] = useState(null);
	const [current, setCurrent] = useState(null);
	const [hourly, setHourly] = useState(null);
	const [daily, setDaily] = useState(null);

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
		if (location) {
			setUrl(
				`${baseUrl}/${version}/${queryType}?latitude=${location.latitude}&longitude=${location.longitude}&temperature_unit=${params.temperature_unit}&wind_speed_unit=${params.wind_speed_unit}&precipitation_unit=${params.precipitation_unit}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=relative_humidity_2m,precipitation,apparent_temperature,wind_speed_10m,temperature_2m,weather_code`
			);
		}
	}, [location, params]);

	useEffect(() => {
		if (location && data) {
			console.log(data);

			const { name, country, country_code } = location;
			const { current, current_units, hourly, hourly_units, daily, daily_units } = data;

			setCurrent({ name, country, country_code, current, current_units });
			setHourly({ hourly, hourly_units });
			setDaily(daily, daily_units);
		}
	}, [data, location]);

	return (
		<WeatherContext.Provider
			value={{
				current,
				hourly,
				daily,
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
