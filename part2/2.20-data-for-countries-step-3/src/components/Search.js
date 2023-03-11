export function Search({searchString, restartSearch}) {
  const searchStyle = {
    paddingTop: 10,
    paddingBottom: 10
  };
  const labelStyle = {
    paddingRight: 10
  }
  return (
    <div style={searchStyle}>
      <label style={labelStyle} htmlFor='searchInput'>Find countries</label>
      <input id='searchInput' value={searchString} onChange={(event) => restartSearch(event.target.value.toLowerCase())} />
    </div>
  );
}