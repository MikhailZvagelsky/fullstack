import { WeatherInfo } from "./WeatherInfo";

function Languages({ languages }) {
  if (languages) {
    const languageKeys = Object.getOwnPropertyNames(languages);
    return (
      <ul>
        {languageKeys.map(key => 
          <li id={key.toString()}>
            {languages[key]}
          </li>)
        }
      </ul>
    );
  }
}

export function CountryInfo({ country }) {
  return (
    <div>
      <h1>{country.name}</h1>
      <div>
        capital {country.capital}
        <br />
        area {country.area}
      </div>
      <div>
        <h2>languages</h2>
        <Languages languages={country.languages} />
      </div>
      <img src={country.flagImg} alt={country.flagDescription} />
      <WeatherInfo country={country} />
    </div>
  );
}
