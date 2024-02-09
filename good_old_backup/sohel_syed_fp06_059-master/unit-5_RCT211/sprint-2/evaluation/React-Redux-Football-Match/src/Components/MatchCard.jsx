import React from "react";
import { useDispatch } from "react-redux";
import { addToWatchFn } from "../Redux/WatchList/action";

export const MatchCard = ({
  competition,
  round,
  team1,
  team2,
  year,
  team2goals,
  team1goals,
  id,
}) => {
  const dispatch = useDispatch();
  const handleWatchList = () => {
    dispatch(addToWatchFn(id));
  };
  return (
    <div className="match-card">
      {/* show the match details   */}
      {/* use any static image, its not provided in server data  */}
      <img
        src="https://thumbs.dreamstime.com/b/football-soccer-ball-kickoff-game-sunset-38302251.jpg"
        alt="alt-img"
        width="100px"
        className="match-image"
      />
      <p className="competition-name">{competition}</p>
      <p className="match-year">{year}</p>
      <p className="team-1">
        {team1} - {team1goals}
      </p>
      <p className="team-2">
        {team2} - {team2goals}
      </p>
      <button className="add-to-watchlist" onClick={handleWatchList}>
        WatchList
      </button>
    </div>
  );
};
