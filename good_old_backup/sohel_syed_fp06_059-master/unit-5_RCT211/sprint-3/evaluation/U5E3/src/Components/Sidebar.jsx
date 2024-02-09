import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";

export const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initalState = searchParams.getAll("category");
  const initalOrder = searchParams.get("order");
  const [category, setCategory] = useState(initalState || []);
  const [order, setOrder] = useState(initalOrder || []);
  const handleCategory = (e) => {
    const newCategory = [...category];
    const value = e.target.value;
    if (newCategory.includes(value)) {
      newCategory.splice(newCategory.indexOf(value), 1);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  console.log(category, order);
  useEffect(() => {
    const params = {
      category,
      order,
    };
    order && (params.order = order);
    setSearchParams(params);
    console.log("abot paramer", order && (params.order = order));
  }, [category, order]);
  return (
    <DIV>
      <h3>Filter by Category</h3>
      <div>
        <input
          data-testid="novel-filter"
          type="checkbox"
          value={"Novel"}
          onChange={handleCategory}
          checked={category.includes("Novel")}
        />
        <label>Novel</label>
        <br />
        <input
          data-testid="science-fiction-filter"
          type="checkbox"
          value={"Science_Fiction"}
          onChange={handleCategory}
          checked={category.includes("Science_Fiction")}
        />
        <label>Science Fiction</label>
        <br />
        <input
          data-testid="thriller-filter"
          type="checkbox"
          value={"Thriller"}
          onChange={handleCategory}
          checked={category.includes("Thriller")}
        />
        <label>Thriller</label>
        <br />
        <input
          data-testid="motivational-filter"
          type="checkbox"
          value={"Motivational"}
          onChange={handleCategory}
          checked={category.includes("Motivational")}
        />
        <label>Motivational</label>
        <br />
      </div>
      <br />
      <br />
      <h3>Sort By Release Year</h3>
      <div>
        <input
          data-testid="sort-asc"
          type="radio"
          name="sort"
          value={"asc"}
          onClick={(e) => setOrder(e.target.value)}
        />
        <label>Ascending</label>
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
          onClick={(e) => setOrder(e.target.value)}
        />
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
`;
