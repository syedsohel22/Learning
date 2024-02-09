const SearchResults = ({ props }) => {
  //const=[{arrival,departure,destination, duration,price}]
  console.log("props", props);
  return (
    <table>
      {/* add columnsheadings */}

      <tbody data-testid="flight-results">
        <tr>
          <th>departure</th>
          <th>duration</th>
          <th>arrival</th>
          <th>price</th>
        </tr>
        {props.map((el,i) => {
          return (
            <tr key={i}>
              <td>{el.departure}</td> <td>{el.duration}</td>
              <td>{el.arrival}</td>
              <td>{el.price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default SearchResults;
//
//   //arrival
// :
// "1:40 PM"
// departure
// :
// "7:40 AM"
// destination
// :
// "florida"
// duration
// :
// "6 hours"
// price
// :
// "50 USD"
// source
// :
// "seattle"
