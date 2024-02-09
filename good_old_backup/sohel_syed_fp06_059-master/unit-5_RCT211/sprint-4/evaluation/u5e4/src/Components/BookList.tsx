import React from "react";
import { bookObj, getBooks, updateQuantity } from "../api";
import { BookCard } from "./BookCard";

export const BookList = () => {
  const [books, setBooks] = React.useState<bookObj[]>([]);

  // //decrease-quantity
  const handleMinusFn = (id: number) => {
    updateQuantity(id).then(() => {
      const fdata = books?.map((el) => {
        return id == el.id ? { ...el, quantity: el.quantity - 1 } : el;
      });
      setBooks(fdata);
    });
  };
  // //delete-button
  // const handleDeleteFn = () => {};

  React.useEffect(() => {
    const fetchBook = async () => {
      const data = await getBooks();
      setBooks(data);
    };
    fetchBook();
  }, []);
  return (
    <div data-testid="book-list">
      {books.length > 0 &&
        books?.map((e, i) => {
          return (
            <BookCard
              key={e.id}
              {...e}
              func={setBooks}
              handleMinusFn={handleMinusFn}
            />
          );
        })}
    </div>
  );
};
