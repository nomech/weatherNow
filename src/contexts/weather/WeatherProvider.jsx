import { useFetch } from '../../hooks/useFetch';
import { useMemo, useState } from 'react';
import { WeatherContext } from './WeatherContext';

export const WeatherProvider = ({ children }) => {
	const [location, setLocation] = useState({
		latitude: 59.9127,
		longitude: 10.7461,
	});

	const [params, setParams] = useState({
		temprature_unit: 'celsius',
		wind_speed_unit: 'kmh',
		precipitation_unit: 'mm',
	});

	const baseUrl = 'https://api.open-meteo.com';
	const version = 'v1';
	const queryType = 'forecast';

	const { data, error, isLoading } = useFetch(
		`${baseUrl}/${version}/${queryType}?latitude=${location.latitude}&longitude=${location.longitude}&hourly=temperature_2m&wind_speed_unit=${params.wind_speed_unit}&temperature_unit=${params.temprature_unit}&precipitation_unit=${params.precipitation_unit}`
	);

	useMemo(() => ({ data, error, isLoading }), [data, error, isLoading]);


	return (
		<WeatherContext.Provider value={{ data, error, isLoading, setParams, setLocation }}>
			{children}
		</WeatherContext.Provider>
	);
};
