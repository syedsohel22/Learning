import React from "react";
import { Navbar } from "../Components/Navbar";
import { addBook, bookObj } from "../api";

export const AddBook = () => {
  const [name, setName] = React.useState<string>("");
  const [image, setImage] = React.useState<string>("");
  const [author, setAuther] = React.useState<string>("");
  const [chapter, setChapter] = React.useState<number>(0);
  const [quantity, setQuantity] = React.useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    const bookData: bookObj = {
      name,
      author,
      image,
      chapter,
      quantity,
      id: Date.now(),
    };
    addBook(bookData);
    console.log(bookData);
    setName("");
    setAuther("");
    setImage("");
    setChapter(0);
    setQuantity(0);
  };
  return (
    <div>
      <Navbar data={"Add New Book"} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="book-name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <input
          type="text"
          className="book-image"
          value={image}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setImage(e.target.value)
          }
        />
        <input
          type="text"
          className="book-author"
          value={author}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAuther(e.target.value)
          }
        />
        <input
          type="number"
          className="book-chapter"
          value={chapter}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setChapter(Number(e.target.value))
          }
        />
        <input
          type="number"
          className="book-quantity"
          value={quantity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuantity(Number(e.target.value))
          }
        />
        <button type="submit" className="submit-form">
          Submit
        </button>
      </form>
    </div>
  );
};
