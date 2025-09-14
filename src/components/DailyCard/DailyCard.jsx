import React from 'react';
import styles from './DailyCard.module.css';
import { weatherMap, formatDay } from '../../utils/weatherUtils';

const DailyCard = ({ day, weatherCode, min, max }) => {
	const weekday = formatDay(new Date(day));
    
	return (
		<div className={styles.card}>
			<h2 className={styles.day}>{weekday}</h2>
			<img src={weatherMap[weatherCode]} alt="" className={styles.weatherIcon} />
			<div className={styles.tempRange}>
				<p className={styles.minTemp}>{Math.round(min)}°</p>
				<p className={styles.maxTemp}>{Math.round(max)}°</p>
			</div>
		</div>
	);
};

export default DailyCard;
