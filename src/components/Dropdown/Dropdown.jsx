import React, { useMemo } from 'react';
import styles from './Dropdown.module.css';
import loadingIcon from '../../assets/images/icon-loading.svg';

const Dropdown = ({ locations, onClick, ref, isLoading  }) => {
	const listItems = useMemo(() => {
		return locations.results.map((location) => (
			<li
				key={location.id ?? `${location.latitude},${location.longitude}`}
				className={styles.dropdownItem}
				onClick={() => onClick(location)}
			>
				{location.name}, {location.country_code}, {location.admin2}
			</li>
		));
	}, [locations, onClick]);

	return (
		<div className={styles.dropdownContainer} ref={ref}>
			<ul className={styles.dropdownList}>
				{isLoading && (
					<li className={styles.loadingRow}>
						<img src={loadingIcon} alt="loading icon" className="loading" />
						Search in progress
					</li>
				)}
				{listItems}
				{!isLoading && locations.results.length === 0 && (
					<li className={styles.emptyRow}>No results</li>
				)}
			</ul>
		</div>
	);
};

export default Dropdown;
