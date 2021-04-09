import React, { Component } from "react";
import { Grid, CssBaseline, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { StatusBar } from "@interfaces/StatusBar";
import SideBar from "@components/interfaces/SideBar";
import Explorer from "@views/Explorer";
import TabBar from "@components/interfaces/TabBar";
import Editor from "@interfaces/Editor";
import "./App.css";

const StyledGrid = withStyles((theme) => ({
	container: {
		height: "100vh",
		width: "auto",
		display: "flex",
		flexGrow: "1",
		flexWrap: "nowrap",
	},
}))(Grid);

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<CssBaseline />
				<Grid className="window" container direction="column">
					<Grid className="container" item container direction="row">
						<Grid className="tabbar" item>
							<SideBar />
						</Grid>
						<StyledGrid item container direction="row">
							<StyledGrid
								className="accordions"
								item
								container
								direction="column"
							>
								<Explorer />
							</StyledGrid>
							<Grid item container direction="column">
								<Grid item>
									<TabBar />
								</Grid>
								<Grid item>
									<Editor />
								</Grid>
							</Grid>
						</StyledGrid>
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
