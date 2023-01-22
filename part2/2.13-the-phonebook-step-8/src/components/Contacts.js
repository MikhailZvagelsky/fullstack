const Contacts = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact) => <div key={contact.name}>{contact.name} {contact.number} </div>)}
    </div>
  );
};

export default Contacts;