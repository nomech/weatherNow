import styles from './HourlyForecast.module.css';
import { useEffect, useState } from 'react';
import HourlyCard from '../HourlyCard/HourlyCard';

const HourlyForecast = ({ hourlyData, isLoading }) => {
	const [hourlyWeather, setHourlyWeather] = useState(null);
	console.log(hourlyData);

	useEffect(() => {
		if (hourlyData) {
			setHourlyWeather(
				hourlyData.time.map((item, index) => {
					return {
						hour: item,
						weather_code: hourlyData.weather_code[index],
						temperature: hourlyData.temperature_2m[index],
					};
				})
			);
		}
	}, [hourlyData]);
	return (
		<>
			{hourlyData && !isLoading && (
				<div className={styles.hourly}>
					<div className={styles.header}>
						<h3>Hourly Forecast</h3>
						<p>Menu</p>
					</div>
					<ul className={styles.forecastList}>
						{hourlyWeather &&
							!isLoading &&
							hourlyWeather.map((weather) => (
								<HourlyCard
									key={weather.hour}
									hour={weather.hour}
									weatherCode={weather.weather_code}
									temperature={weather.temperature}
								/>
							))}
					</ul>
				</div>
			)}
		</>
	);
};

export default HourlyForecast;
