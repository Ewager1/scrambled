import React, { useEffect, useState } from "react";

export default function Timer() {
  //This is where the time is set
  const [time, setTime] = useState(260);

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          return 0;
        } else return time - 1;
      });
    }, 1000);
  }, []);

  return (
    <div className="Timer">
        Time left: {`${Math.floor(time / 60)}`.padStart(2, 0)}:
        {`${time % 60}`.padStart(2, 0)}
    </div>
  );
}
