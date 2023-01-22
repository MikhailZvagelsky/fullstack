import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getContacts = () => {
  return axios
    .get(baseUrl)
    .then(response => response.data);
};

const saveContact = contact => {
  return axios
    .post(baseUrl, contact)
    .then(response => response.data);
};

export default { getContacts, saveContact };
