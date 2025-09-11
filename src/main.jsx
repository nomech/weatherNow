import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { WeatherProvider } from './contexts/weather/WeatherProvider.jsx';

createRoot(document.getElementById('root')).render(
	<WeatherProvider>
		<App />
	</WeatherProvider>
);
