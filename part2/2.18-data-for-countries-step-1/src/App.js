import './App.css';
import { useEffect, useState } from 'react';
import infoService from './services/infoService';
import countryService from './services/countryService';
import { Search } from './components/Search';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchString, setSearchString] = useState('');

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
  const bodyStyle = {
    margin: 20
  }
  return (
    <div style={bodyStyle}>
      <Search searchString={searchString} setSearchString={setSearchString} />
      {infoService.info(searchString, countries)}
    </div>
  );
}

export default App;
