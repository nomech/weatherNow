import sunnyIcon from './../assets/images/icon-sunny.webp';
import partlyCloudyIcon from './../assets/images/icon-partly-cloudy.webp';
import stormIcon from './../assets/images/icon-storm.webp';
import rainIcon from './../assets/images/icon-rain.webp';
import snowIcon from './../assets/images/icon-snow.webp';
import cloudyIcon from './../assets/images/icon-overcast.webp';
import fogIcon from './../assets/images/icon-fog.webp';
import drizzleIcon from './../assets/images/icon-drizzle.webp';

// Mapping of weather codes to icons

export const weatherMap = {
	0: sunnyIcon, // Clear sky
	1: sunnyIcon, // Mainly clear
	2: partlyCloudyIcon, // Partly cloudy
	3: cloudyIcon, // Overcast
	45: fogIcon, // Fog
	48: fogIcon, // Depositing rime fog
	51: drizzleIcon, // Light drizzle
	53: drizzleIcon, // Moderate drizzle
	55: drizzleIcon, // Dense drizzle
	56: drizzleIcon, // Freezing drizzle: light
	57: drizzleIcon, // Freezing drizzle: dense
	61: rainIcon, // Slight rain
	63: rainIcon, // Moderate rain
	65: rainIcon, // Heavy rain
	66: rainIcon, // Light freezing rain
	67: rainIcon, // Heavy freezing rain
	71: snowIcon, // Slight snow fall
	73: snowIcon, // Moderate snow fall
	75: snowIcon, // Heavy snow fall
	77: snowIcon, // Snow grains
	80: rainIcon, // Slight rain showers
	81: rainIcon, // Moderate rain showers
	82: stormIcon, // Violent rain showers (stormy)
	85: snowIcon, // Slight snow showers
	86: snowIcon, // Heavy snow showers
	95: stormIcon, // Thunderstorm: slight/moderate
	96: stormIcon, // Thunderstorm with slight hail
	99: stormIcon, // Thunderstorm with heavy hail
};

export const formatDate = (date) => {
	return new Intl.DateTimeFormat('en-US', {
		weekday: 'long',
		month: 'short',
		day: 'numeric',
		year: 'numeric',
		hour12: false,
	}).format(date);
};

export const formatTime = (date) => {
	return new Intl.DateTimeFormat('en-US', {
		hour: 'numeric',
		minute: 'numeric',
		hour12: false,
	}).format(date);
};

export const formatDay = (date) => {
	return new Intl.DateTimeFormat('en-US', {
		weekday: 'short',
	}).format(date);
};
