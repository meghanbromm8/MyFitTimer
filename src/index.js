import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	history: [
        {
          results: null
        }
      ],
		timer: "Timer On",
		timeStarted: true
    };
  }
    startTimer() {
    this.setState({
      timer: "Timer On"
    });
  }
  
    stopTimer() {
    this.setState({
      timer: "Timer Off"
    });
  }
  
  render() {
  const history = this.state.history;
  const timer = this.state.timer;
      return (
	  <div>
	  <div> Current Time: {timer} </div>
	 <div>
		<button onClick={() => this.startTimer()}>Start Timer</button>
		<button onClick={() => this.stopTimer()}>Stop Timer</button>
	 </div>
	 <div> Move History: </div>
	 </div>
      );
	}
}

ReactDOM.render(<Stopwatch />, document.getElementById("root"));

