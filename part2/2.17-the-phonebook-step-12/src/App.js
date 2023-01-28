import { useState, useEffect } from 'react';
import { Filter } from './components/Filter';
import { ContactForm } from './components/ContactForm';
import Contacts from './components/Contacts';
import Notification from './components/Notification';
import contactService from './services/contacts';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchString, setSearchString] = useState('');
  const [notification, setNotification] = useState({ text: null, style: '' });

  const fetchContacts = () => {
    contactService
      .getContacts()
      .then(contacts => setContacts(contacts));
  };

  useEffect(fetchContacts, []);

  const saveContact = (event) => {
    event.preventDefault();
    if (isNameAlreadyUsed(newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const existingContact = contacts.find((contact) => contact.name === newName);
        console.log('Existing contact:', existingContact);
        const contact = {...existingContact, number: newNumber };
        updateContact(contact);
      }
    } else {
      const contact = { name: newName, number: newNumber };
      saveNewContact(contact);
    }
  };

  function saveNewContact(contact) {
    contactService
    .saveContact(contact)
    .then(savedContact => {
      console.log(savedContact);
      setContacts(contacts.concat(savedContact));
      setNewName('');
      setNewNumber('');
      setNotification({ text: `Added ${savedContact.name}`, style: 'success'} );
      setTimeout(() => setNotification(null), 5000);
    })
    .catch(error => {
      console.log('Failed to save contact', contact, 'Error:', error);
    });
  }

  function updateContact(changedContact) {
    contactService
    .updateContact(changedContact)
    .then(savedContact => {
      setContacts(contacts.map(contact => 
        contact.id === savedContact.id ? savedContact : contact
      ));
      setNewName('');
      setNewNumber('');
      setNotification( { text: `Contact information of ${savedContact.name} updated.`, style: 'success'} );
      setTimeout(() => setNotification(null), 5000);
    })
    .catch(error => {
      console.log('Failed to update contact ', changedContact, 'Error: ', error);
      setNewName('');
      setNewNumber('');
      setNotification( {text: `Information of ${changedContact.name} has already been removed from server.`, style: 'error'} );
      setTimeout(() => setNotification(null), 5000);
      setContacts(contacts.filter(contact => contact.id !== changedContact.id));
    });
  }

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
      <Notification notification={notification} />
      <Filter searchString={searchString} setSearchString={setSearchString} />
      <h3>add a new</h3>
      <ContactForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} submit={saveContact} />
      <h3>Numbers</h3>
      <Contacts contacts={search()} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
