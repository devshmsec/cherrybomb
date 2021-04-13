import React, { Component } from "react";
import { Grid, CssBaseline } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import StatusBar from "@interfaces/StatusBar";
import SideBar from "@interfaces/Sidebar";
import SidePanel from "@interfaces/SidePanel";
import TabBar from "@interfaces/TabBar";
// import Editor from "@interfaces/Editor";

import "./App.css";
export const TabContext = React.createContext();

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
		this.state = {
			tabSelected: "Explorer",
		};
	}

	handleTabChange = (event, value) => {
		this.setState({ tabSelected: value });
	};

	render() {
		const { tabSelected } = this.state;
		const handleSideTabs = this.handleTabChange;

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
						<TabContext.Provider
							value={{
								tabSelected,
								handleSideTabs,
							}}
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
									<SidePanel />
								</StyledGrid>
								<Grid item container direction="column">
									<Grid className="tabbar" item>
										<TabBar />
									</Grid>
									<Grid className="editor" item></Grid>
								</Grid>
							</StyledGrid>
						</TabContext.Provider>
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
