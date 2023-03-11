import axios from "axios";

const url = 'https://restcountries.com/v3.1/all';

const getCountryInfos = () => {
  return axios.get(url);
};

const countryService = { getCountryInfos };
export default countryService;
