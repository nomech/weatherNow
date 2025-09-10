import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.svg';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<img src={logo} alt="Logo" />
			menu
		</nav>
	);
};

export default Navbar;
