import { useState } from 'react';

const Persons = ({ persons }) => {
  return (
    <div>
      {persons.map((person) => <div key={person.name}>{person.name} {person.number} </div>)}
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchString, setSearchString] = useState('');

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
      <div>
        filter shown with
        <input value={searchString} onChange={(event) => setSearchString(event.target.value.toLowerCase())} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={submit}>
        <div>
          name: 
          <input value={newName} onChange={(event) => setNewName(event.target.value)} />
        </div>
        <div>
          number: 
          <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={search()} />
    </div>
  );
}

export default App;
