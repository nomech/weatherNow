import React from 'react';
import styles from './DetailsCard.module.css';
const DetailsCard = ({ title, description, unit }) => {
	console.log(description);

	return (
		<div className={styles.card}>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.description}>
				{description} {unit}
			</p>
		</div>
	);
};

export default DetailsCard;
