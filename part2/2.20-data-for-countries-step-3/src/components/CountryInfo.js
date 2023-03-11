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
  const capital = country.capital && country.capital.length > 0 ? country.capital[0] : "undefined";
  return (
    <div>
      <h1>{country.name.official}</h1>
      <div>
        capital {capital}
        <br />
        area {country.area ?? "undefined"}
      </div>
      <div>
        <h2>languages</h2>
        <Languages languages={country.languages} />
      </div>
      <img src={country.flags.png} alt={country.flags.alt} />
      <WeatherInfo country={country} />
    </div>
  );
}
