import React, { Component } from "react";
import { Grid, CssBaseline } from "@material-ui/core";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<CssBaseline />
				<Grid container direction="column">
					<Grid item container></Grid>
					<Grid item></Grid>
				</Grid>
			</>
		);
	}
}

export default App;
