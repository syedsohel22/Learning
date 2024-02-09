import React from "react";

type Props = {
  //  TODO
  hours: number;
  minutes: number;
  secound: number;
};

const Clock = (props: Props) => {
  return (
    <div data-testid="clock">
      <h4 data-testid="clock-label">
        {/* Label */}
        24 hour Live custom Componet Clock
      </h4>
      <span data-testid="clock-hours">
        {/* Hours */}
        {props.hours}
      </span>
      :
      <span data-testid="clock-minutes">
        {/* Minutes */}
        {props.minutes}
      </span>
      :
      <span data-testid="clock-seconds">
        {/* Seconds */}
        {props.secound}
      </span>
    </div>
  );
};

export default Clock;
