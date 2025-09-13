import styles from './HourlyForecast.module.css';
import { formatTime, weatherMap } from '../../utils/weatherUtils';
import { useEffect, useState } from 'react';

const HourlyForecast = ({ hourlyForecastData, isLoading }) => {
	const [timeAndTemp, setTimeAndTemp] = useState(null);

	useEffect(() => {
		if (hourlyForecastData && hourlyForecastData.hourly) {
			const { time, temperature_2m } = hourlyForecastData.hourly;
			const now = new Date();
			now.setMinutes(0, 0, 0);
			const isoDate = now.toISOString().slice(0, 13);
			const timeOfDayIndex = time.findIndex((t) => t.slice(0, 13) === isoDate);
			const timeStart = Math.max(timeOfDayIndex, 0);
			const timeEnd = timeOfDayIndex + 8;

			const forecastTimeRange = time.slice(timeStart, timeEnd);
			const forecastTempRange = temperature_2m.slice(timeStart, timeEnd);

			setTimeAndTemp(
				forecastTimeRange.map((t, index) => {
					return {
						time: formatTime(new Date(t)),
						temperature: Math.round(forecastTempRange[index]),
					};
				})
			);
		}
	}, [hourlyForecastData]);

	return (
		<>
			{hourlyForecastData && !isLoading && (
				<div className={styles.hourlyForecast}>
					<div className={styles.header}>
						<h3>Hourly Forecast</h3>
						<p>Menu</p>
					</div>
					<div className={styles.forecastList}>
						{timeAndTemp &&
							timeAndTemp.map((item) => (
								<div className={styles.forecastItem} key={item.time}>
									<div className={styles.forecastDetails}>
										<img
											src={weatherMap[3]}
											alt="Weather icon"
											className={styles.weatherIcon}
										/>
										<p>{item.time}</p>
									</div>
									<p>{item.temperature}°</p>
								</div>
							))}
					</div>
				</div>
			)}
		</>
	);
};

export default HourlyForecast;
