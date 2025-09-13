import { useFetch } from '../../hooks/useFetch';
import { useEffect, useMemo, useState } from 'react';
import { WeatherContext } from './WeatherContext';

export const WeatherProvider = ({ children }) => {
	const [url, setUrl] = useState(
		'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current=weather_code'
	);
	const [location, setLocation] = useState({
		id: 3143244,
		name: 'Oslo',
		latitude: 59.91273,
		longitude: 10.74609,
		elevation: 26,
		feature_code: 'PPLC',
		country_code: 'NO',
		admin1_id: 3143242,
		admin2_id: 6453366,
		timezone: 'Europe/Oslo',
		population: 1082575,
		country_id: 3144096,
		country: 'Norway',
		admin1: 'Oslo County',
		admin2: 'Oslo',
	});

	console.log(location);

	const [params, setParams] = useState({
		temperature_unit: 'celsius',
		wind_speed_unit: 'kmh',
		precipitation_unit: 'mm',
	});

	const baseUrl = 'https://api.open-meteo.com';
	const version = 'v1';
	const queryType = 'forecast';

	const { data, error, isLoading } = useFetch(url);

	const weatherData = useMemo(() => ({ ...location, ...data }), [location, data]);
	const hourlyForecastData = useMemo(() => data?.hourly, [data?.hourly]);

	useEffect(() => {
		setUrl(
			`${baseUrl}/${version}/${queryType}?latitude=${location.latitude}&longitude=${location.longitude}&hourly=temperature_2m&wind_speed_unit=${params.wind_speed_unit}&temperature_unit=${params.temperature_unit}&precipitation_unit=${params.precipitation_unit}&current=weather_code&hourly=weather_code`
		);
	}, [location, params]);

	return (
		<WeatherContext.Provider
			value={{ weatherData, hourlyForecastData, error, isLoading, setParams, setLocation }}
		>
			{children}
		</WeatherContext.Provider>
	);
};
