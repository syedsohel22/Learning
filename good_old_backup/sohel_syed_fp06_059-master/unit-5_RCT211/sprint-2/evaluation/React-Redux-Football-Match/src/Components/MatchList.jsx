import React, { useEffect } from "react";
import { getMatches } from "../Redux/Matches/action";
import { useDispatch, useSelector } from "react-redux";
import { MatchCard } from "./MatchCard";

export const MatchList = () => {
  const data = useSelector((state) => {
    return state.matchReducer.matches;
  });
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMatches());
  }, []);
  return (
    <div data-testid="match-list">
      {/* // Show matches here  */}
      {data?.map((el) => {
        return <MatchCard {...el} key={el.id} />;
      })}
    </div>
  );
};
