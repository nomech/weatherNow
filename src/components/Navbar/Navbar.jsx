import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.svg';
import UnitsMenu from '../UnitsMenu/UnitsMenu';
import { useClickAway } from '@uidotdev/usehooks';
import Button from '../Button/Button';


const Navbar = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const dropdownRef = useClickAway(() => {
		setMenuIsOpen(false);
	});

	const onClickButton = () => {
		setMenuIsOpen((prev) => !prev);
	};
	return (
		<nav className={styles.navbar}>
			<img src={logo} alt="Logo" />
			<div className={styles.menu}>
				<Button className={'menuButton'} onClick={onClickButton}>
					Menu
				</Button>
				{menuIsOpen && <UnitsMenu ref={dropdownRef} />}
			</div>
		</nav>
	);
};

export default Navbar;
