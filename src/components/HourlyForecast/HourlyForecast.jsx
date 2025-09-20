import styles from './HourlyForecast.module.css';
import { useEffect, useState } from 'react';
import HourlyCard from '../HourlyCard/HourlyCard';
import HourlyMenu from '../HourlyMenu/HourlyMenu';
import Button from '../Button/Button';

const HourlyForecast = ({ hourlyData, isLoading }) => {
	const [hourlyWeather, setHourlyWeather] = useState(null);
	const [isVisible, setIsVisible] = useState(false);
	const [day, setDay] = useState('Friday');

	useEffect(() => {
		if (hourlyData) {
			setHourlyWeather(
				hourlyData['Monday'].time.map((item, index) => {
					return {
						hour: item,
						weather_code: hourlyData[day].weather_code[index],
						temperature: hourlyData[day].temperature_2m[index],
					};
				})
			);
		}
	}, [day, hourlyData]);

	const onClickMenu = () => {
		setIsVisible((prev) => !prev);
	};

	const onClickDay = (day) => {
		setDay(day);
		setIsVisible(false);
	};

	return (
		<>
			{hourlyData && !isLoading && (
				<div className={styles.hourly}>
					<div className={styles.header}>
						<h3>Hourly Forecast</h3>
						<div className={styles.hourelyMenuContainer}>
							<Button className={'hourlyMenu'} onClick={onClickMenu}>
								{day}
							</Button>
							{isVisible && <HourlyMenu setDay={onClickDay} />}
						</div>
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
