import React from "react";
import { bookObj, updateQuantity } from "../api";
interface newbookobj extends bookObj {
  func: React.Dispatch<React.SetStateAction<bookObj[]>>;
  handleMinusFn: () => void;
}
export const BookCard = ({
  id,
  name,
  author,
  image,
  chapter,
  quantity,
  func,
  handleMinusFn,
}: newbookobj) => {
  //increase-quantity
  const handlePlusFn = async (id: number) => {
    const data = await updateQuantity(id);
    console.log(data);
  };
  return (
    <div className="book-card">
      <img src={image} alt={name} className="book-image" />

      <p className="book-name">{name}</p>
      <p className="book-author">{author}</p>
      <p className="book-chapter">{chapter}</p>
      <p className="book-name">{name}</p>
      <button data-testid="increase-quantity" disabled={quantity >= 10}>
        quantity++
      </button>
      <p className="book-quantity">{quantity}</p>
      <button
        data-testid="decrease-quantity"
        disabled={quantity == 0}
        onClick={handleMinusFn}
      >
        quantity--
      </button>
      <button data-testid="delete-button">Delete</button>
    </div>
  );
};
