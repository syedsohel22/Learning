import { useEffect } from "react";
import fiction from "../fiction.json";
import BookCard from "./BookCard";

export default function Fiction() {
  return (
    <div data-testid="books-fiction">
      <h1 data-testid="books-container-title">{"Fictional Books"}</h1>

      <div className="books-container">
        {fiction.map((el) => {
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
        {/* Map all Fictional Books here */}
      </div>
    </div>
  );
}
