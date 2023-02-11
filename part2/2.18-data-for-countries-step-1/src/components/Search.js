export function Search({searchString, setSearchString}) {
  const searchStyle = {
    paddingTop: 10,
    paddingBottom: 10
  };
  const labelStyle = {
    paddingRight: 10
  }
  return (
    <div style={searchStyle}>
      <label style={labelStyle} for='searchInput'>Find countries</label>
      <input id='searchInput' value={searchString} onChange={(event) => setSearchString(event.target.value.toLowerCase())} />
    </div>
  );
}