import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	sec:0,
	times: []
    };
  }
    stopwatchTick=()=>{
	this.setState({
	  sec: this.state.sec + 1,
    });
	}
	
    startTimer=()=>{
	this.f=setInterval(this.stopwatchTick,1000);
  }
  
    stopTimer=()=>{
	clearInterval(this.f);
	this.setState({  
	  times: [this.state.sec + " seconds, ",this.state.times],
	  sec: 0,
    });
	
  }
  render() {
      return (
	  <div>
	  <h1> Current Time: {this.state.sec} Seconds </h1>
	 <div>
		<button onClick={this.startTimer}>Start Timer</button>
		<button onClick={this.stopTimer}>Stop Timer</button>
	 </div>
	 <div> Time History: </div>
	 <div> {this.state.times} </div>
	 </div>
      );
	}
}

ReactDOM.render(<Stopwatch />, document.getElementById("root"));

