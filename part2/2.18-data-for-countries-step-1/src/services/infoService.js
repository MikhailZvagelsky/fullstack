import { CountryInfo } from '../components/CountryInfo';
import { CountryNames } from '../components/CountryNames';
import { CountriesNotFound } from '../components/CountriesNotFound';
import { TooManyMatchesInfo } from '../components/TooManyMatchesInfo';

function nameContains(country, searchString) {
  if (country && country.name && country.name.official) {
    return country.name.official.toLowerCase().includes(searchString);
  }
  return false;
}
function hasName(country) {
  return country && country.name && country.name.official;
}

const info = (searchString, countries) => {
  const selected = countries
    .filter(country => hasName(country))
    .filter(country => country.name.official.toLowerCase().includes(searchString));
  if (selected.length == 0) {
    return ( <CountriesNotFound searchString={searchString} /> );
  }
  if (selected.length === 1) {
    return ( <CountryInfo country={selected[0]} /> );
  }
  if (selected.length > 10) {
    return ( <TooManyMatchesInfo /> );
  }
  return ( <CountryNames countries={selected.map(country => country.name.official)}/> );
}

export default { info };