import styles from './HourlyForecast.module.css';
import { formatTime, weatherMap } from '../../utils/weatherUtils';
import { useEffect, useState } from 'react';

const HourlyForecast = ({ hourlyForecastData, isLoading }) => {
	const [timeAndTemp, setTimeAndTemp] = useState(null);

	useEffect(() => {
		if (hourlyForecastData) {
			const now = new Date();
			now.setMinutes(0, 0, 0);
			const isoDate = now.toISOString().slice(0, 13);
			const timeOfDayIndex = hourlyForecastData?.time.findIndex(
				(time) => time.slice(0, 13) === isoDate
			);
			const timeStart = Math.max(timeOfDayIndex);
			const timeEnd = timeOfDayIndex + 8;

			const forecastTimeRange = hourlyForecastData?.time.slice(timeStart, timeEnd);
			const forecastTempRange = hourlyForecastData?.temperature_2m.slice(timeStart, timeEnd);

			setTimeAndTemp(
				forecastTimeRange.map((time, index) => {
					return {
						time: formatTime(new Date(time)),
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
