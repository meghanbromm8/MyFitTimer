import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from "axios"
import dayjs from "dayjs"

class Stopwatch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sec: 0,
			times: []
		};
	}

	componentDidMount() {
		axios.get("http://localhost:3001/times")
			.then(response => {
				this.setState({
					times: response.data
				})
			})
			.catch(error => console.log(error))
	}
	stopwatchTick = () => {
		this.setState({
			sec: this.state.sec + 1,
		});
	}

	startTimer = () => {
		this.f = setInterval(this.stopwatchTick, 1000);
	}

	stopTimer = () => {
		clearInterval(this.f);
console.log(this.state.sec)
const body={timeRecorded:this.state.sec}
console.log(body)
		axios.post("http://localhost:3001/times", {
			timeRecorded:`${this.state.sec} seconds`
		})
			.then(() => {
				this.setState({
					sec: 0
				})
				axios.get("http://localhost:3001/times")
					.then(response => {
						this.setState({
							times: response.data,

						})
					})
			})
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
				<div> {this.state.times.map(time => {
					const hour = dayjs(time.date).format("h")
					const minute = dayjs(time.date).format("mm")
					const ampm = dayjs(time.date).format("A")
					return <div key={time._id}>
						<h3>{dayjs(time.date).format("MM/DD/YYYY")} {hour}:{minute} {ampm}</h3>
						<p>Time Recorded: {time.timeRecorded}</p>
					</div>
				})} </div>
			</div>
		);
	}
}

ReactDOM.render(<Stopwatch />, document.getElementById("root"));

