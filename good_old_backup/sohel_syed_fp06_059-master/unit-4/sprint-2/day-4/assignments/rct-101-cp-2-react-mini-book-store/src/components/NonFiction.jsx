import Nonfinction from "../nonfiction.json";
import BookCard from "./BookCard";
export default function NonFiction() {
  return (
    <div data-testid="books-nonfiction">
      <h1 data-testid="books-container-title">{"Show Non-Fiction Books"}</h1>

      <div className="books-container">
        {Nonfinction.map((el) => {
          return (
            <BookCard
              key={el.id}
              title={el.title}
              author={el.author}
              year={el.year}
              price={el.price}
              img={el.img}
            />
          );
        })}
        {/* Display all Non-Fiction books here */}
      </div>
    </div>
  );
}
