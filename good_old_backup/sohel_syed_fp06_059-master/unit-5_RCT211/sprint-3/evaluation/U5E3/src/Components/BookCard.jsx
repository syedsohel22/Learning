import React from "react";
import { useNavigate } from "react-router-dom";

export const BookCard = ({
  id,
  author,
  book_name,
  category,
  cover_photo,
  no_of_chapters,
  release_year,
}) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/edit-book/${id}`);
  };
  return (
    <div className="book-card">
      {/* ``` - Show Image in image tag with class `book-image` - Show Book name
      with class `book-name` - Show Author with class `book-author` - Show
      Category with class `book-category` - Show Release year with class
      `book-year` - Show Number of chapters with class `book-chapter` * Do not
      add any extra text, See the Image provided to know what needs to be
      displayed * ``` */}
      <img
        className="book-image"
        src={cover_photo}
        alt={book_name}
        width={"100px"}
      />
      <p className="book-name">{book_name}</p>
      <p className="book-author">{author}</p>
      <p className="book-category">{category}</p>
      <p className="book-year">{release_year}</p>
      <p className="book-chapter">Chapters: {no_of_chapters}</p>
      <button className="edit-book" onClick={handleEdit}>
        Edit
      </button>
    </div>
  );
};
//https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg
/**
 * 
 * author
: 
"Masai"
book_name
: 
"Full-Stack Web Development"
category
: 
"Novel"
chapters
: 
(2) [{…}, {…}]
cover_photo
: 
"https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg"
id
: 
1
no_of_chapters
: 
6
release_year
: 
2019
 */
