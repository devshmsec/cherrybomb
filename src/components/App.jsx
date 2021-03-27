import React, { Component } from "react";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	componentDidMount() {
		this.timer = setInterval(() => this.tick(), 1000);
	}

	tick() {
		this.setState({
			date: new Date(),
		});
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		console.log(this.state.date.toLocaleTimeString());
		return (
			<>
				<h1>Hello, World</h1>
				<button className="btn btn-danger px-3 mx-3">
					{this.state.date.toLocaleTimeString()}
				</button>
			</>
		);
	}
}

export default App;
