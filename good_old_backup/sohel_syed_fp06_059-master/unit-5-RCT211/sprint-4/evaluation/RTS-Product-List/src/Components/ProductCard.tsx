import React from "react";

import { deleteProduct, updateDisLike, updateLike, Productobj } from "./../api";

interface productsupdate extends Productobj {
  func: React.Dispatch<React.SetStateAction<Productobj[]>>;
}
export const ProductCard = ({
  id,
  image,
  name,
  brand,
  price,
  like,
  dislike,
  func,
}: productsupdate) => {
  //Like Function
  const handleLike = (id: number) => {
    const updateLikefn = async (id: number) => {
      const data = await updateLike(id);
      func(data);
    };
    updateLikefn(id);
  };

  //dislike Function
  const handleDisLike = async (id: number) => {
    const updatedDisLikefn = async () => {
      const data = await updateDisLike(id);
      func(data);
    };
    //updatedDisLikefn(id);
  };

  //delete Function
  const handleDelete = (id: number) => {
    const deletefn = async () => {
      const data = await deleteProduct(id);
      func(data);
    };
    deletefn();
  };
  return (
    <div className={`product-card`}>
      {/* Add all elements of product card here */}
      <img src={image} alt={name} className="product-image" />
      <p className="product-name">{name}</p>
      <p className="product-brand">{brand}</p>
      <p className="product-price">{price}</p>

      <p className="product-like">{like}</p>
      <button data-testid="like-button" onClick={() => handleLike(id)}>
        Like
      </button>


      
      <button data-testid="dislike-button" onClick={() => handleDisLike(id)}>
        DisLike
      </button>
      <p className="product-dislike">{dislike}</p>
      <button data-testid="delete-button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};
/**
   1. Image with class `product-image`
  2. Name with class `product-name`
  3. Price with class `product-price`
  4. Brand with class `product-brand`
  5. Like button with `data-testid=like-button`
  6. Like count with class `product-like`
  7. Dislike button with `data-testid=dislike-button`
  8. Dislike count with class `product-dislike`
  9. Delete button with `data-testid=delete-button`
 */
