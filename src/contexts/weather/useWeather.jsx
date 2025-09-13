 import { WeatherContext } from './WeatherContext';
import { useContext } from 'react';

export const useWeather = () => {
	const context = useContext(WeatherContext);
	if (context === null) {
		throw new Error('useWeather must be used within a <WeatherProvider>');
	}
	return context;
};
