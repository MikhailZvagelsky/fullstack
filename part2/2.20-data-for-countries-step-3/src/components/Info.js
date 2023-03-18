import { CountryInfo } from './CountryInfo';
import { CountryNames } from './CountryNames';
import { CountriesNotFound } from './CountriesNotFound';
import { TooManyMatchesInfo } from './TooManyMatchesInfo';

export function Info({ dataModel, setSelectedCountry }) {
  // eslint-disable-next-line default-case
  switch (dataModel.type) {
    case 'too-many-search-results':
      return <TooManyMatchesInfo />;
    case 'search-results':
      return <CountryNames countries={dataModel.searchResults} setSelectedCountry={setSelectedCountry} />;
    case 'country-model':
      return <CountryInfo country={dataModel.countryInfo} />;
    case 'empty-search-result':
      return <CountriesNotFound />
  }
}
