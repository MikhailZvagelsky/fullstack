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

  function deleteContact(contact) {
    contactService
      .deleteContact(contact.id)
      .then(deletedContact => {
        setContacts(contacts.filter(cont => cont.id !== contact.id));
      })
      .catch(error => {
        console.log('Failed to delete the contact', contact, 'the error: ', error);
      });
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchString={searchString} setSearchString={setSearchString} />
      <h3>add a new</h3>
      <ContactForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} submit={saveContact} />
      <h3>Numbers</h3>
      <Contacts contacts={search()} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
