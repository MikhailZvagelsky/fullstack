export function CountryNames({ countries, setSelectedCountry }) {

  const showCountry = (event) => {
    const countryName = event.target.previousSibling.textContent;
    const selectedCountry = countries.find(country => country.name.official === countryName);
    setSelectedCountry(selectedCountry);
  };

  const names = countries.map(country => country.name.official);
  const spanStyle = {
    width: 400
  };
  const buttonStyle = {
    marginLeft: 10
  }

  return (
    <ul>
      {names.map(name =>
          <li id={name.toString()}>
            <span style={spanStyle}>
              {name}
            </span>
            <button type='button' style={buttonStyle} onClick={showCountry} >
              show
            </button>
          </li>
        )
      }
    </ul>
  );
}