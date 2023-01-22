import { useState, useEffect } from 'react';
import { Filter } from './components/Filter';
import { ContactForm } from './components/ContactForm';
import Contacts from './components/Contacts';
import contactService from './services/contacts';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchString, setSearchString] = useState('');

  const fetchContacts = () => {
    contactService
      .getContacts()
      .then(contacts => setContacts(contacts));
  };

  useEffect(fetchContacts, []);

  const saveContact = (event) => {
    event.preventDefault();
    if (isNameAlreadyUsed(newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const contact = { name: newName, number: newNumber };
      contactService
        .saveContact(contact)
        .then(savedContact => {
          setContacts(contacts.concat(savedContact));
          setNewName('');
          setNewNumber('');
        });
    }
  };

  function isNameAlreadyUsed(name) {
    return contacts.some((contact) => contact.name === name);
  }

  function search() {
    return contacts.filter((contact) => contact.name.toLowerCase().includes(searchString));
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchString={searchString} setSearchString={setSearchString} />
      <h3>add a new</h3>
      <ContactForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} submit={saveContact} />
      <h3>Numbers</h3>
      <Contacts contacts={search()} />
    </div>
  );
}

export default App;
