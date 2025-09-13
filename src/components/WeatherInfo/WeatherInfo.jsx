import styles from './WeatherInfo.module.css';
import { weatherMap, formatDate } from '../../utils/weatherUtils';

const WeatherInfo = ({ data, isLoading }) => {
	const now = new Date();
	now.setMinutes(0, 0, 0);

	const isoDate = now.toISOString();
	const trimmedIsoDate = isoDate.slice(0, 16);

	const timeOfDay = data.hourly?.time.indexOf(trimmedIsoDate);
	const currentTemperature = data.hourly?.temperature_2m[timeOfDay];
	const roundedTemperature = Math.round(currentTemperature);
	const weatherCode = data.current?.weather_code;

	return (
		<div className={styles.weatherInfo}>
			{!isLoading && (
				<>
					<div className={styles.location}>
						<h2>
							{data?.name}, {data?.country}
						</h2>
						<div>{formatDate(now)}</div>
					</div>
					<div className={styles.temperature}>
						<img
							src={weatherMap[weatherCode]}
							alt="Weather icon"
							className={styles.weatherIcon}
						/>
						<h2 className={styles.temperatureValue}>{roundedTemperature}°</h2>
					</div>
				</>
			)}
		</div>
	);
};

export default WeatherInfo;
