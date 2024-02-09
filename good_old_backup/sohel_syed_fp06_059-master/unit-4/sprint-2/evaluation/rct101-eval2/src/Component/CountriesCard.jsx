import styles from "./CountriesCard.module.css";

//{country: 'China', id: 27, Rank: 1, population: 1388232693} population
function CountriesCard(props) {
  const { id, country, Rank, population } = props;
  return (
    <div data-testid="country-card" className={styles.container}>
      <div>
        Country: <b data-testid="country-card-name">{country}</b>
      </div>
      <div>
        Population: <b data-testid="country-card-population">{population}</b>
      </div>
    </div>
  );
}

export default CountriesCard;
