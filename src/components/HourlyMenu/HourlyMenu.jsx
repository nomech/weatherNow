import React from 'react';
import styles from './HourlyMenu.module.css';

const HourlyMenu = ({ setDay }) => {
	const onClickDay = (day) => {
		setDay(day);
	};

	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

	return (
		<div className={styles.hourlyMenu}>
			<ul className={styles.list}>
				{days.map((day) => (
					<li className={styles.listItem} onClick={() => onClickDay(day)}>
						{day}
					</li>
				))}
			</ul>
		</div>
	);
};

export default HourlyMenu;
