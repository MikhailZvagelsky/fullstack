import { useState } from 'react';

const Persons = ({ persons }) => {
  return (
    <div>
      {persons.map((person) => <div key={person.name}>{person.name}</div>)}
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [newName, setNewName] = useState('');

  const submit = (event) => {
    event.preventDefault();
    if (isNameAlreadyUsed(newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat({ name: newName }));
      setNewName('');
    }
  };

  function isNameAlreadyUsed(name) {
    return persons.some((person) => person.name === name);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submit}>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
}

export default App;
