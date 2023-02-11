export function CountryNames({ countries }) {
  return (
    <ul>
      {countries.map(name => 
          <li id={name}>{name}</li>
        )
      }
    </ul>
  );
}