import weatherService from '../services/weatherService';

export function WeatherInfo({ country }) {
  loadWeatherData(country)
  .then((weatherData) => {
    if (weatherData.capital) {
      console.log('Here');
      return (
        <div>
          <h1>Weather in {weatherData.capital}</h1>
        </div>
      );
    }
  })
  .catch(error => console.log('Failed to load weather data:', error));
}

async function loadWeatherData(country) {
  const weatherData = {
    capital: '',
    temperature: '',
    icon: null,
    wind: ''
  };
  if (country && country.capital && country.capital.length > 0) {
    weatherData.capital = country.capital[0];

  }
  return weatherData;
}

function CapitalWeather({ country }) {
  if (country.capitalInfo && country.capitalInfo.latlng && country.capitalInfo.latlng.length === 2) {
    const [latitude, longitude] = country.capitalInfo.latlng;
    console.log('Coordinates: ', latitude, longitude);
    weatherService.getWeatherData(latitude, longitude)
      .then(response => {
        console.log(response.data);
        if (response.data) {
          return (
            <div>
              Hello
              <Temperature weatherData={response.data} />
              <WeatherIcon weatherData={response.data} />
              <Wind weatherData={response.data} />
            </div>
          );
        }
      }).catch(error =>
        console.log(`Fail to get weather data for coordinates [${latitude}, ${longitude}]:`, error)
      );
  }
}

function Temperature({ weatherData }) {
  console.log('Hi', weatherData);
  return (<div>Temperature</div>);
}

function WeatherIcon({ weatherData }) {
  return (<div>WeatherIcon</div>);
}

function Wind({ weatherData }) {
  return (<div>Wind</div>);
}
