import styles from "./CountryList.module.css";

import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  const countries = cities.reduce((acc, cur) => {
    const country = { country: cur.country, emoji: cur.emoji };
    if (!acc.some((accCountry) => accCountry.country === country.country)) {
      return (acc = [...acc, country]);
    } else {
      return acc;
    }
  }, []);

  console.log(countries);

  if (!countries.length)
    return <Message message="Add your first country by clicking on the map!" />;

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
