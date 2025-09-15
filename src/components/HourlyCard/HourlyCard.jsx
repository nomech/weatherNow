import React from 'react';
import styles from './HourlyCard.module.css';
import { weatherMap, formatTime } from '../../utils/weatherUtils';

const HourlyCard = ({ hour, weatherCode, temperature }) => {
	const time = formatTime(new Date(hour));

	return (
		<li className={styles.card}>
			<div className={styles.forecastDetails}>
				<img src={weatherMap[weatherCode]} alt="" className={styles.weatherIcon} />
				<p className={styles.time}>{time}</p>
			</div>
			<p className={styles.minTemp}>{Math.round(temperature)}°</p>
		</li>
	);
};

export default HourlyCard;
