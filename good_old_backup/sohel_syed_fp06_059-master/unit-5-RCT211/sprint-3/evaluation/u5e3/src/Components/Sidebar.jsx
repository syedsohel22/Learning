import styled from "styled-components";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export const Sidebar = () => {
  const [check, setCheck] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();
  const handleCheck = (e) => {
    const value = e.target.value;
    let newCheck = [...check];

    if (newCheck.includes(value)) {
      newCheck = newCheck.filter((el) => el !== value);
    } else {
      newCheck.push(value);
    }

    setCheck(newCheck);
    console.log(searchParam.getAll("check"));
  };

  useEffect(() => {
    let param = {
      check,
    };

    setSearchParam(param);
  }, [check]);
  return (
    <DIV>
      <h3>Filter by Batch</h3>
      <div>
        <input
          data-testid="batch-web101"
          type="checkbox"
          onChange={handleCheck}
          value="WEB101"
        />
        <label>WEB-101</label>
        <br />
        <br />
        <input
          data-testid="batch-js201"
          type="checkbox"
          onChange={handleCheck}
          value="JS201"
        />
        <label>JS-201</label>
        <br />
        <br />
        <input
          data-testid="batch-rct101"
          type="checkbox"
          onChange={handleCheck}
          value="RCT101"
        />
        <label>RCT101</label>
        <br />
        <br />
        <input
          data-testid="batch-rct211"
          type="checkbox"
          onChange={handleCheck}
          value="RCT211"
        />
        <label>RCT211</label>
        <br />
        <br />
        <input
          data-testid="batch-nxm101"
          type="checkbox"
          onChange={handleCheck}
          value="NXM101"
        />
        <label>NXM-101</label>
        <br />
      </div>
      <br />
      <br />
      <br />
      <h3>Paginate</h3>
      <PAGE>
        <button data-testid="page-prev">Previous</button>
        <button data-testid="page-next">Next</button>
      </PAGE>
    </DIV>
  );
};

const PAGE = styled.div`
  button {
    margin: 20px;
    border: none;
    width: 100px;
    height: 35px;
    margin-bottom: 10px;
  }
`;

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
  text-align: left;
  margin-left: 20px;

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: larger;
  }
`;
