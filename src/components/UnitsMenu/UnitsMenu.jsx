import styles from './UnitsMenu.module.css';
import Button from '../Button/Button';
import { useWeather } from '../../contexts/weather';

const UNIT_CONFIG = [
	{
		title: 'Temperature',
		key: 'temperature_unit',
		options: [
			{ value: 'celsius', label: 'Celsius (°C)' },
			{ value: 'fahrenheit', label: 'Fahrenheit (°F)' },
		],
	},
	{
		title: 'Wind Speed',
		key: 'wind_speed_unit',
		options: [
			{ value: 'kmh', label: 'km/h' },
			{ value: 'mph', label: 'mph' },
		],
	},
	{
		title: 'Precipitation',
		key: 'precipitation_unit',
		options: [
			{ value: 'mm', label: 'Millimeter (mm)' },
			{ value: 'inch', label: 'Inches (in)' },
		],
	},
];

const UnitsMenu = ({ ref }) => {
	const { params, setParams, isMetric, setIsMetric } = useWeather();

	const onClickSwitch = () => {
		setIsMetric((prev) => !prev);
		if (isMetric) {
			setParams({
				temperature_unit: 'fahrenheit',
				wind_speed_unit: 'mph',
				precipitation_unit: 'inch',
			});
		} else {
			setParams({
				temperature_unit: 'celsius',
				wind_speed_unit: 'kmh',
				precipitation_unit: 'mm',
			});
		}
	};

	const onClickUnit = (key, unit) => {
		setParams((prevParams) => ({
			...prevParams,
			[key]: unit,
		}));
	};

	return (
		<div className={styles.unitsMenu} ref={ref}>
			<Button className={'switchButton'} onClick={onClickSwitch}>
				Switch to {isMetric ? ' Metric' : 'Imperial'}
			</Button>
			{UNIT_CONFIG.map((group) => (
				<ul key={group.title} className={styles.list}>
					<h3 className={styles.title}>{group.title}</h3>
					{group.options.map((option) => (
						<li
							key={option.label}
							className={`${styles.listItem} ${
								params[group.key] === option.value ? styles.active : ''
							}`}
							onClick={() => onClickUnit(group.key, option.value)}
						>
							{option.label}
						</li>
					))}
				</ul>
			))}
		</div>
	);
};

export default UnitsMenu;
