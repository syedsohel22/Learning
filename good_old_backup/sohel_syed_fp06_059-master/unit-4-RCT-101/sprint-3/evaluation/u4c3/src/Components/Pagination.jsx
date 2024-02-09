function Pagination({ totalPage, current, onChange }) {
  //prev Button
  const prev = (
    <button
      disabled={current === 1}
      onClick={() => onChange(current - 1)}
      data-testid="prev-page"
    >
      PREV
    </button>
  );

  //Current
  const currentPage = <button data-testid="current-page">{current}</button>;

  //Next Button
  const next = (
    <button
      disabled={current === totalPage}
      onClick={() => onChange(current + 1)}
      data-testid="next-page"
    >
      NEXT
    </button>
  );
  const totalPagesElem = (
    <div>
      Total Pages: <b data-testid="total-pages">{totalPage}</b>{" "}
    </div>
  );
  return (
    <div data-testid="pagination-container">
      {prev}
      {currentPage}
      {next}
      {totalPagesElem}
    </div>
  );
}

export default Pagination;
