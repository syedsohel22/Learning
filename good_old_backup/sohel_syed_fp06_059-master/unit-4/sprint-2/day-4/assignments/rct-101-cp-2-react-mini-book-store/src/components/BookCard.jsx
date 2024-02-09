export default function BookCard({ year, title, img, author, price }) {
  return (
    <div data-testid="book-card">
      <img src={ img } alt={"img-1"} />
      <b>
        <div data-testid="book-card-title">
          {title }
          <span>({year})</span>
        </div>
      </b>
      <div data-testid="book-card-author">{ author }</div>
      <div data-testid="book-card-price">{ price }</div>
    </div>
  );
}
