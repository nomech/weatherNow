import styles from './Error.module.css';
import errorIcon from '../../assets/images/icon-error.svg';
import Button from '../Button/Button';

const Error = () => {
	return (
		<div className={styles.error}>
			<img src={errorIcon} alt="Error icon" className={styles.icon} />
			<h1 className={styles.title}> Something went wrong</h1>
			<p className={styles.message}>We couldn't connect to the server (API error). Please try again in a few moments</p>
			<Button>Retry</Button>
		</div>
	);
};

export default Error;
