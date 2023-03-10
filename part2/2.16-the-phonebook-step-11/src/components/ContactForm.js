export function ContactForm({ newName, setNewName, newNumber, setNewNumber, submit }) {
  return (
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
  );
}