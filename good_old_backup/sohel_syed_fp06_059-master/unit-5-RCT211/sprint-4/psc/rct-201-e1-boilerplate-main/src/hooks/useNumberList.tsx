import { useState } from "react";
const useNumberList = (initialArray: number[]) => {
  const [list, setlist] = useState(initialArray);
  // TODO
  // refer readme.md for what to return

  // list: /** List of numbers */,
  // appendStart: /** Function to append element at start */,
  // appendEnd: /** Function to append element at end of list */,
  // popStart: /** Function to pop element at start of list */,
  // popEnd: /** Function to pop element at the end of list */,
  // clear: /** Function to clear the list and set it to empty */,
  // reset: /** Function to reset list values to the original values */

  const appendStart = (val: number) => {
    list.unshift(val);
  };

  const appendEnd = (val: number) => {
    list.push(val);
  };

  const popStart = () => {
    list.shift();
  };

  const popEnd = () => {
    list.pop();
  };

  const clear = () => {
    setlist([]);
  };

  const reset = () => {
    setlist(initialArray);
  };

  return { list, appendEnd, appendStart, popEnd, popStart, clear, reset };
};

export default useNumberList;
