import './App.css';
import { useEffect, useState } from 'react';
import countryService from './services/countryService';
import { Info } from './components/Info';
import { Search } from './components/Search';
import dataModelService from './services/dataModelService';

function App() {
  /** List of all countries. Loaded once and never changed. */
  const [countries, setCountries] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [dataModel, setDataModel] = useState({ type: 'not-initialized' });

  const loadCountries = () => {
    countryService
      .getCountryInfos()
      .then(infos => {
        setCountries(infos.data);
      }).catch(error => {
        console.log(error);
      });
  };
  useEffect(loadCountries, []);

  const restartSearch = (newSearchString) => {
    setSearchString(newSearchString);
    setSelectedCountry(null);
  };

  const buildDataModel = () => {
    dataModelService
      .buildDataModel(searchString, countries, selectedCountry, setDataModel);
    console.log('build');
  };

  useEffect(buildDataModel, [countries, searchString, selectedCountry]);

  const bodyStyle = {
    margin: 20
  }
  return (
    <div style={bodyStyle}>
      <Search searchString={searchString} restartSearch={restartSearch} />
      {/* <Info searchString={searchString} countries={countries} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} /> */}
      <Info dataModel={dataModel} />
    </div>
  );
}

export default App;
