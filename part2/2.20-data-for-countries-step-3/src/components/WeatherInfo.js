export function WeatherInfo({ country }) {
  return (
    <div>
      <h1>Weather in {country.capital}</h1>
      <div>temperature {country.temperature} Celsius</div>
      <img src={country.weatherIcon} />
      <div>wind {country.wind} m/s</div>
    </div>
  );
}
