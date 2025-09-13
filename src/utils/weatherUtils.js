import sunnyIcon from './../assets/images/icon-sunny.webp';
import stormIcon from './../assets/images/icon-storm.webp';
import rainIcon from './../assets/images/icon-rain.webp';
import snowIcon from './../assets/images/icon-snow.webp';
import cloudyIcon from './../assets/images/icon-overcast.webp';
import fogIcon from './../assets/images/icon-fog.webp';

export const weatherMap = {
	0: sunnyIcon,
	1: sunnyIcon,
	2: cloudyIcon,
	3: cloudyIcon,
	45: fogIcon,
	48: fogIcon,
	51: rainIcon,
	53: rainIcon,
	55: rainIcon,
	56: rainIcon,
	57: rainIcon,
	61: rainIcon,
	63: rainIcon,
	65: rainIcon,
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
