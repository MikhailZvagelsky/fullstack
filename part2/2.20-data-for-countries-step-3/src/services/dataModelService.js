import weatherService from './weatherService';

async function buildDataModel(searchString, countries, selectedCountry, setDataModel) {
  if (selectedCountry) {
    buildCountryModel(selectedCountry, setDataModel);
    return;
  }

  const searchResults = countries
    .filter(country => hasName(country))
    .filter(country => country.name.official.toLowerCase().includes(searchString));
  
  if (searchResults.length === 0) {
    setDataModel({
      type: 'empty-search-result',
      searchString,
    });
    return;
  }

  if (searchResults.length === 1) {
    buildCountryModel(searchResults[0], setDataModel);
    return;
  }

  if (searchResults.length > 10) {
    setDataModel({
      type: 'too-many-search-results'
    });
    return;
  }

  setDataModel({
    type: 'search-results',
    searchResults,
  });
}

async function buildCountryModel(country, setDataModel) {
  const model = { type: 'country-model' };
  model.capital = country.capital && country.capital.length > 0 ? country.capital[0] : undefined;
  model.countryName = country.name?.official;
  model.area = country.area;
  model.languages = country.languages;
  model.flagImg = country.flags?.png;
  model.flagDescription = country.flags?.alt;
  const [latitude, longitude] = country.capitalInfo?.latlng;
  if (latitude && longitude) {
    weatherService
    .getWeatherData(latitude, longitude)
    .then(response => {
      const weather = response.data?.current;
      model.temperature = weather?.temp;
      model.wind = weather?.wind_speed;
      const icons = weather?.weather;
      if (icons && icons.length > 0 && icons[0].icon) {
        model.weatherIcon = `https://openweathermap.org/img/wn/${icons[0].icon}@2x.png`;
      }
      console.log('Model', model);
      setDataModel(model);
      console.log('Set data model.');
    })
    .catch(error => {
      console.log('Error fetching weather data:', error);
      setDataModel(model);
  });
  } else {
    console.log('Model', model);
    setDataModel(model);
  }
}

function hasName(country) {
  return country && country.name && country.name.official;
}

const dataModelService = { buildDataModel };

export default dataModelService;
