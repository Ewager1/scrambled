import React from "react";

import Timer from "./Timer";

class Time extends React.Component {
  render() {
    return (
      <span>
        <Timer time={300} />
      </span>
    );
  }
}

export default Time;