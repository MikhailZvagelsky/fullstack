import axios from 'axios';
import { useState, useEffect } from 'react';
import { Filter } from './components/Filter';
import { PersonForm } from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchString, setSearchString] = useState('');

  const fetchPersons = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(result => {
        setPersons(result.data);
      });
  };

  useEffect(fetchPersons, []);

  const submit = (event) => {
    event.preventDefault();
    if (isNameAlreadyUsed(newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }));
      setNewName('');
      setNewNumber('');
    }
  };

  function isNameAlreadyUsed(name) {
    return persons.some((person) => person.name === name);
  }

  function search() {
    return persons.filter((person) => person.name.toLowerCase().includes(searchString));
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchString={searchString} setSearchString={setSearchString} />
      <h3>add a new</h3>
      <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} submit={submit} />
      <h3>Numbers</h3>
      <Persons persons={search()} />
    </div>
  );
}

export default App;
