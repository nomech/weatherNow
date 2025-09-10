import styles from './Button.module.css';

const Button = ({ children, className, onClick }) => {
	return (
		<button className={`${styles.button} ${styles[className]}`} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
