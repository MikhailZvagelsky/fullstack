export function Filter({ searchString, setSearchString }) {
  return (
    <div>
      filter shown with
      <input value={searchString} onChange={(event) => setSearchString(event.target.value.toLowerCase())} />
    </div>
  );
}
