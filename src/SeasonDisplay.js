import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  // eslint-disable-next-line
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  const text =
    season === "winter" ? "Burr,Its chilly!!" : "Let's get to the beach!";
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default SeasonDisplay;
