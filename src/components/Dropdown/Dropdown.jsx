import React from 'react';
import styles from './Dropdown.module.css';

const Dropdown = ({ locations, onClick }) => {
	return (
		<div className={styles.dropdownContainer}>
			<ul className={styles.dropdownList}>
				{locations &&
					locations.results.map((location) => (
						<li
							key={location.id}
							className={styles.dropdownItem}
							onClick={() => onClick(location)}
						>
							{location.name}, {location.country_code}, {location.admin2}
						</li>
					))}
			</ul>
		</div>
	);
};

export default Dropdown;
