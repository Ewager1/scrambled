import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: "00",
      value: props.time,
      loading: true
    };
  }

  componentDidMount() {
    this.startCountDown();
  }

  tick = () => {
    let min = Math.floor(this.secondsRemaining / 60);
    let sec = this.secondsRemaining - min * 60;

    this.setState({
      value: min,
      seconds: sec
    });

    if (sec < 10) {
      const { seconds } = this.state;
      this.setState({
        seconds: "0" + seconds
      });
    }

    if (min < 10) {
      this.setState({
        value: "0" + min
      });
    }

    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle);
    }

    this.secondsRemaining--;
    this.setState({ loading: false });
  };

  startCountDown = () => {
    const { value } = this.state;
    this.intervalHandle = setInterval(this.tick, 1000);
    this.secondsRemaining = value;
  };

  render() {
    const { loading, value, seconds } = this.state;
    const { className } = this.props;
    return !loading ? (
      <span className={"timer" + className}>
        {value}:{seconds}
      </span>
    ) : null;
  }
}

export default Timer;
