const Card = ({ data = [] }) => {
  console.log("cart", data);
  return (
    <div data-testid="data-list">
      {data.map((item) => {
        return (
          <div data-testid="superhero-list">
            {/*All the content of the card has to be added over here*/}
            <h2>Hero Name:{item.name}</h2>
            <h3>Height:{item.height}</h3>
            <h3>Weight:{item.weight}</h3>
            <h3>Power:{item.power}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
