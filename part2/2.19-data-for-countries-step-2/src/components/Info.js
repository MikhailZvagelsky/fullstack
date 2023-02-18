import { CountryInfo } from './CountryInfo';
import { CountryNames } from './CountryNames';
import { CountriesNotFound } from './CountriesNotFound';
import { TooManyMatchesInfo } from './TooManyMatchesInfo';

function hasName(country) {
  return country && country.name && country.name.official;
}

export function Info({ searchString, countries, selectedCountry, setSelectedCountry }) {
  
  if (selectedCountry) {
    return (<CountryInfo country={selectedCountry} />);
  }

  const searchResults = countries
    .filter(country => hasName(country))
    .filter(country => country.name.official.toLowerCase().includes(searchString));
  
  if (searchResults.length === 0) {
    return (<CountriesNotFound searchString={searchString} />);
  }

  if (searchResults.length === 1) {
    return (<CountryInfo country={searchResults[0]} />);
  }

  if (searchResults.length > 10) {
    return (<TooManyMatchesInfo />);
  }

  
  return (<CountryNames countries={searchResults} setSelectedCountry={setSelectedCountry} />);
}