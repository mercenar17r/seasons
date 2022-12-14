import "./seasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's get to the beach",
    iconName: "winter",
  },
  winter: {
    text: "Burrr,it's cold!",
    iconName: "sun",
  },
};

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
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={` icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right ${iconName} icon massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
