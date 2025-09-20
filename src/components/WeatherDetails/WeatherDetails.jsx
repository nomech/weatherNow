import React from 'react';
import styles from './WeatherDetails.module.css';
import DetailsCard from '../DetailsCard/DetailsCard';

const WeatherDetails = ({ weatherData, isLoading }) => {
	return (
		<>
			{weatherData && (
				<div className={styles.weatherDetails}>
					<DetailsCard
						title="Feels Like"
						description={Math.round(weatherData.current.apparent_temperature)}
						unit={weatherData.current_units.apparent_temperature}
						isLoading={isLoading}
					/>
					<DetailsCard
						title="Humidity"
						description={weatherData.current.relative_humidity_2m}
						unit={weatherData.current_units.relative_humidity_2m}
						isLoading={isLoading}
					/>
					<DetailsCard
						title="Wind"
						description={Math.round(weatherData.current.wind_speed_10m)}
						unit={weatherData.current_units.wind_speed_10m}
						isLoading={isLoading}
					/>
					<DetailsCard
						title="Precipitation"
						description={Math.round(weatherData.current.precipitation)}
						unit={weatherData.current_units.precipitation}
						isLoading={isLoading}
					/>
				</div>
			)}
		</>
	);
};

export default WeatherDetails;
