import React, { PureComponent } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";

export class CreateParentNode extends PureComponent {
	render() {
		return (
			<Dialog
				fullWidth
				maxWidth="sm"
				open={this.props.openParentNode}
				onClose={this.props.handleParentClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">
					Create Parent Node
				</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Node Name"
						type="text"
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={this.props.handleParentClose}
						color="secondary"
					>
						Cancel
					</Button>
					<Button
						onClick={this.props.handleParentClose}
						color="primary"
					>
						Create
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

export class CreateChildNode extends PureComponent {
	render() {
		return (
			<Dialog
				fullWidth
				maxWidth="sm"
				open={this.props.openChildNode}
				onClose={this.props.handleChildClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">
					Create Child Node
				</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Node Name"
						type="text"
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={this.props.handleChildClose}
						color="secondary"
					>
						Cancel
					</Button>
					<Button
						onClick={this.props.handleChildClose}
						color="primary"
					>
						Create
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

export class DeleteNode extends PureComponent {
	render() {
		return (
			<Dialog
				open={this.props.openDelete}
				onClose={this.props.handleDeleteClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"Do you want to delete this node?"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						After deleting the node its data cannot be recovered.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={this.props.handleDeleteClose}
						color="primary"
					>
						Cancel
					</Button>
					<Button
						onClick={this.props.handleDeleteClose}
						color="secondary"
						autoFocus
					>
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

export class NewProject extends PureComponent {
	render() {
		return (
			<Dialog
				fullWidth
				maxWidth="sm"
				open={this.props.openNewProject}
				onClose={this.props.handleNewProjectClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">
					Create New Project
				</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Node Name"
						type="text"
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={this.props.handleNewProjectClose}
						color="secondary"
					>
						Cancel
					</Button>
					<Button
						onClick={this.props.handleNewProjectClose}
						color="primary"
					>
						Create
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
}
