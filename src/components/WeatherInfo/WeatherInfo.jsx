import styles from './WeatherInfo.module.css';
import { weatherMap, formatDate } from '../../utils/weatherUtils';

const WeatherInfo = ({ data, isLoading }) => {
	const now = new Date();
	now.setMinutes(0, 0, 0);

	return (
		<>
			{isLoading && (
				<div className={styles.weatherContainer}>
					<p>Loading...</p>
				</div>
			)}
			{!isLoading && data && (
				<div className={styles.weatherContainer}>
					<di className={styles.weatherInfo}>
						<div className={styles.location}>
							<h2>
								{data?.name}, {data?.country}
							</h2>
							<div>{formatDate(now)}</div>
						</div>
						<div className={styles.temperature}>
							<img
								src={weatherMap[data.current.weather_code]}
								alt="Weather icon"
								className={styles.weatherIcon}
							/>
							<h2 className={styles.temperatureValue}>
								{Math.round(data.current.temperature_2m)}°
							</h2>
						</div>
					</di>
				</div>
			)}
		</>
	);
};

export default WeatherInfo;
