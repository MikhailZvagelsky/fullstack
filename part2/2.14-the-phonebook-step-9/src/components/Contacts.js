const Contact = ({ contact, deleteContact }) => {
  
  const deleteHandler = () => {
    if (window.confirm(`Delete ${contact.name}?`)) {
      deleteContact(contact);
    }
  };

  return (
    <div >
      {contact.name} {contact.number}
      <button onClick={deleteHandler}>delete</button>
    </div>
  );
}

const Contacts = ({ contacts, deleteContact }) => {
  return (
    <div>
      {contacts.map((contact) => <Contact key={contact.name} contact={contact} deleteContact={deleteContact} />)}
    </div>
  );
};

export default Contacts;