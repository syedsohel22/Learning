//total={TotalPages} handleChange={handleChange} current={page}

function Pagination({ current, total, handleClick }) {
  const pages = new Array(total).fill(0).map((a, i) => (
    <button
      style={{ borderColor: i + 1 === current ? "red" : "none" }}
      onClick={() => handleClick(i + 1)}
    >
      {i + 1}
    </button>
  ));
  return <div data-testid="page-container">{pages}</div>;
}

export default Pagination;
