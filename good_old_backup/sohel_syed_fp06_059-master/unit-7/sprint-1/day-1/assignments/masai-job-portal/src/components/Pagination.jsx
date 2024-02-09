import { ButtonGroup, Button } from "@chakra-ui/react";

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ButtonGroup spacing={2}>
      {pageNumbers.map((number) => (
        <Button
          key={number}
          onClick={() => paginate(number)}
          variant={currentPage === number ? "solid" : "outline"}
        >
          {number}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default Pagination;
