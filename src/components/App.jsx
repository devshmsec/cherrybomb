import React, { Component } from "react";
import { Grid, CssBaseline, Typography } from "@material-ui/core";
import { StatusBar } from "@interfaces/StatusBar";
import TabBar from "@interfaces/TabBar";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<CssBaseline />
				<Grid className="window" container direction="column">
					<Grid item container direction="row">
						<Grid item>
							<TabBar />
						</Grid>
						<Grid item container direction="column">
							<Grid item></Grid>
							<Grid item></Grid>
						</Grid>
					</Grid>
					<Grid item>
						<StatusBar />
					</Grid>
				</Grid>
			</>
		);
	}
}

export default App;
