import React, { useMemo, useState } from 'react';
import styles from './Searchbar.module.css';
import searchIcon from '../../assets/images/icon-search.svg';
import Button from './../Button/Button';
import { useFetch } from '../../hooks/useFetch';
import Dropdown from './../Dropdown/Dropdown';
import { useWeather } from '../../contexts/weather';
import { useClickAway } from '@uidotdev/usehooks';

const Searchbar = () => {
	const [search, setSearch] = useState('');
	const [selectedLocation, setSelectedLocation] = useState();
	const [isVisible, setIsVisible] = useState(false);

	const dropdownRef = useClickAway(() => {
		setIsVisible(false);
	});

	const { data, isLoading } = useFetch(
		`https://geocoding-api.open-meteo.com/v1/search?name=${search}&count=10&language=en&format=json`
	);

	useMemo(() => ({ data }), [data]);

	const { setLocation } = useWeather();

	const handleChange = (e) => {
		setSearch(e.target.value);
		if (data) {
			setSelectedLocation(data?.results ? data.results[0] : null);
		}
	};

	const handleonClickSearch = () => {
		setIsVisible(true);
	};

	const handleOnClickDropdownmItem = (location) => {
		setSelectedLocation(location);
		setSearch(`${location.name}, ${location.country_code}, ${location.admin2}`);
		setIsVisible(false);
	};

	const handleonClickSubmit = (e) => {
		e.preventDefault();
		if (selectedLocation) {
			setLocation(selectedLocation);
		}
	};

	return (
		<>
			<div className={styles.searchbarContainer}>
				<div className={styles.searchbar}>
					<img src={searchIcon} alt="search icon" className={styles.searchIcon} />
					<input
						className={styles.searchInput}
						type="text"
						id="searchbar"
						name="searchbar"
						placeholder={'Search for a place...'}
						onChange={handleChange}
						value={search}
						onClick={handleonClickSearch}
						autoComplete='off'
					/>
					{data?.results && isVisible && (
						<Dropdown
							locations={data}
							onClick={handleOnClickDropdownmItem}
							ref={dropdownRef}
							isLoading={isLoading}
						/>
					)}
				</div>
			</div>
			<Button onClick={handleonClickSubmit} className={'searchButton'}>
				Search
			</Button>
		</>
	);
};

export default Searchbar;
