import React, { useEffect, useState } from 'react';
import styles from './DailyForecast.module.css';
import DailyCard from '../DailyCard/DailyCard';

const DailyForecast = ({ weatherData, isLoading }) => {
	const [dailyWeather, setDailyWeather] = useState(null);

	useEffect(() => {
		if (weatherData) {
			setDailyWeather(
				weatherData.time.map((item, index) => {
					return {
						day: item,
						weather_code: weatherData.weather_code[index],
						min: weatherData.temperature_2m_min[index],
						max: weatherData.temperature_2m_max[index],
					};
				})
			);
		}
	}, [weatherData]);

	return (
		<div className={styles.dailyForecast}>
			{dailyWeather &&
				!isLoading &&
				dailyWeather.map((weather) => (
					<DailyCard
						key={weather.day}
						day={weather.day}
						weatherCode={weather.weather_code}
						min={weather.min}
						max={weather.max}
					/>
				))}
		</div>
	);
};

export default DailyForecast;
