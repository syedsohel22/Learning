import React from "react";
import { Button, ButtonGroup, Select } from "@chakra-ui/react";
const Pagination = ({ setLimit, setPage, totalPage, page }) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;

  return (
    <ButtonGroup>
      <Button
        data-cy="pagination-first-button"
        onClick={() => setPage(1)}
        disabled={page === 1}
      >
        First
      </Button>
      <Button
        data-cy="pagination-previous-button"
        disabled={page === 1}
        onClick={() => setPage((prev) => prev - 1)}
      >
        Previous
      </Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button
        disabled={page === totalPage}
        data-cy="pagination-next-button"
        onClick={() => setPage((prev) => prev + 1)}
      >
        Next
      </Button>
      <Button
        disabled={page === totalPage}
        data-cy="pagination-last-button"
        onClick={() => setPage(totalPage)}
      >
        Last
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
