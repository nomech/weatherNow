import { useFetch } from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import { WeatherContext } from './WeatherContext';

export const WeatherProvider = ({ children }) => {
	const [url, setUrl] = useState(null);
	const [location, setLocation] = useState(null);
	const [current, setCurrent] = useState(null);
	const [hourly, setHourly] = useState(null);
	const [daily, setDaily] = useState(null);
	const [isMetric, setIsMetric] = useState(false);
	const [params, setParams] = useState({
		temperature_unit: 'celsius',
		wind_speed_unit: 'kmh',
		precipitation_unit: 'mm',
		isMetric: false,
	});

	const baseUrl = 'https://api.open-meteo.com';
	const version = 'v1';
	const queryType = 'forecast';
	const { data, error, isLoading } = useFetch(url);
	
	useEffect(() => {
		if (location) {
			const today = new Date();
			const start = today.toISOString().split('T')[0];

			const endDate = new Date(today);
			endDate.setDate(endDate.getDate() + 6);
			const end = endDate.toISOString().split('T')[0];

			setUrl(
				`${baseUrl}/${version}/${queryType}
				?latitude=${location.latitude}
				&longitude=${location.longitude}
				&temperature_unit=${params.temperature_unit}
				&wind_speed_unit=${params.wind_speed_unit}
				&precipitation_unit=${params.precipitation_unit}
				&start_date=${start}
				&end_date=${end}
				&daily=weather_code,temperature_2m_max,temperature_2m_min
				&hourly=temperature_2m,weather_code&current=relative_humidity_2m,precipitation,apparent_temperature,wind_speed_10m,temperature_2m,weather_code`
			);
		}
	}, [location, params]);

	useEffect(() => {
		if (location && data) {
			const { name, country, country_code } = location;
			const { current, current_units, hourly, hourly_units, daily, daily_units } = data;
			const groupedByDay = {};

			hourly.time.forEach((hour, index) => {
				const date = new Date(hour);
				const day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);

				if (!groupedByDay[day]) {
					groupedByDay[day] = {
						time: [],
						temperature_2m: [],
						weather_code: [],
					};
				}

				groupedByDay[day].time.push(hour);
				groupedByDay[day].temperature_2m.push(hourly.temperature_2m[index]);
				groupedByDay[day].weather_code.push(hourly.weather_code[index]);
			});

			setCurrent({ name, country, country_code, current, current_units });
			setHourly(groupedByDay, hourly_units);
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
				params,
				setParams,
				setLocation,
				isMetric,
				setIsMetric,
			}}
		>
			{children}
		</WeatherContext.Provider>
	);
};
