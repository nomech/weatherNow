import React, { useState } from 'react';
import styles from './UnitsMenu.module.css';
import Button from '../Button/Button';
import { useWeather } from '../../contexts/weather';

const UnitsMenu = ({ ref }) => {
	const { params, setParams } = useWeather();

	return (
		<div className={styles.unitsMenu} ref={ref}>
			<Button className={'switchButton'}> Switch to Imperial</Button>
			<h3 className={styles.title}>Temprature</h3>
			<ul className={styles.list}>
				<li className={`${styles.listItem} ${styles.active}`}>Celsius (°C)</li>
				<li className={styles.listItem}>Fahrenheit (°F)</li>
			</ul>
			<hr />

			<h3 className={styles.title}>Wind Speed</h3>
			<ul className={styles.list}>
				<li className={`${styles.listItem} ${styles.active}`}>km/h</li>
				<li className={styles.listItem}>mph</li>
			</ul>
			<hr />

			<h3 className={styles.title}>Precipitation</h3>
			<ul className={styles.list}>
				<li className={`${styles.listItem} ${styles.active}`}>Millimeter (mm)</li>
				<li className={styles.listItem}>Inches (in)</li>
			</ul>
		</div>
	);
};

export default UnitsMenu;
