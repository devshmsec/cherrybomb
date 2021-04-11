import React, { Component } from "react";
import { Grid, CssBaseline, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { StatusBar } from "@components/interfaces/StatusBar";
import SideBar from "@components/interfaces/Sidebar";
import Explorer from "@views/Explorer";
import TabBar from "@components/interfaces/TabBar";
import Editor from "@components/interfaces/Editor";
import "./App.css";

const StyledGrid = withStyles((theme) => ({
	container: {
		height: "100vh",
		width: "auto",
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
				<StyledGrid className="window" container direction="column">
					<StyledGrid
						className="container"
						item
						container
						direction="row"
					>
						<Grid className="sidebar" item>
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
								<Grid className="tabbar" item>
									<TabBar />
								</Grid>
								<Grid className="editor" item>
									<Editor />
								</Grid>
							</Grid>
						</StyledGrid>
					</StyledGrid>
					<Grid item>
						<StatusBar />
					</Grid>
				</StyledGrid>
			</>
		);
	}
}

export default App;
