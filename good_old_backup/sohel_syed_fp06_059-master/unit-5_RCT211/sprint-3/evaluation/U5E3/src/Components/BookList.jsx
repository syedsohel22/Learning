import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../Redux/BookReducer/action";
import { BookCard } from "./BookCard";
import { useLocation, useSearchParams } from "react-router-dom";

export const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => {
    return state.bookReducer.books;
  });

  const [searchParams] = useSearchParams();
  const location = useLocation();
  const paramObj = {
    params: {
      category: searchParams.getAll("category"),
      _sort: "release_year",
      _order: searchParams.get("order"),
    },
  };
  useEffect(() => {
    dispatch(getBooks(paramObj));
  }, [location.search]);
  console.log(location.search);
  return (
    <div
      data-testid="book-list"
      style={{
        display: "grid",
        gridTemplateColumns: "auto",
        gridTemplateRows: "auto",
      }}
    >
      {/* Map through books using BookCard component */}
      {books?.length > 0 &&
        books.map((el) => {
          return <BookCard key={el.id} {...el} />;
        })}
    </div>
  );
};
