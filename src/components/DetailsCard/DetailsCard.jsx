import React from 'react';
import styles from './DetailsCard.module.css';
const DetailsCard = ({ title, description, unit, isLoading }) => {
	return (
		<div className={styles.card}>
			<h3 className={styles.title}>{title}</h3>
			{isLoading && <p>-</p>}
			{!isLoading && (
				<p className={styles.description}>
					{description} {unit}
				</p>
			)}
		</div>
	);
};

export default DetailsCard;
