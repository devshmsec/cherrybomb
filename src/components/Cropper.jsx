import React, { useState } from "react";
import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DescriptionIcon from "@material-ui/icons/Description";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { generateDownload, copyToClipboard } from "../utils/helpers";

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(2),
	},
	container: {
		height: "100%",
		width: "100%",
	},
	containercropper: {
		height: "90%",
		padding: theme.spacing(1),
	},
	cropper: {
		height: "90%",
		// position: "relative",
	},
	slider: {
		margin: "auto",
		width: "70%",
		height: "10%",
	},
	containerbuttons: {
		border: "1px solid #f5f5f5",
		height: "10%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
}));

export default function App() {
	// Variables
	const classes = useStyles();
	const [image, setImage] = useState(null);
	const [croppedArea, setCroppedArea] = useState(null);
	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [zoom, setZoom] = useState(1);

	//functions
	const onCropComplete = (percentage, pixels) => {
		console.log(percentage, pixels);
		setCroppedArea(pixels);
	};

	const onSelectFile = (event) => {
		if (event.target.files && event.target.files.length > 0) {
			const reader = new FileReader();
			reader.readAsDataURL(event.target.files[0]);
			reader.addEventListener("load", () => {
				console.log(reader.result);
				setImage(reader.result);
			});
		}
	};

	const copyImage = () => {
		console.log(image, crop);
		copyToClipboard(image, crop);
	};

	return (
		<div className={classes.container}>
			{image && (
				<div className={classes.containercropper}>
					<div className={classes.cropper}>
						<Cropper
							image={image}
							crop={crop}
							zoom={zoom}
							aspect={4 / 3}
							onCropChange={setCrop}
							onZoomChange={setZoom}
							onCropComplete={onCropComplete}
						/>
					</div>
					<div className={classes.slider}>
						<Slider
							min={1}
							max={3}
							step={0.1}
							value={zoom}
							onChange={(e, zoom) => setZoom(zoom)}
						/>
					</div>
				</div>
			)}

			<div className={classes.containerbuttons}>
				<Button
					variant="contained"
					color="default"
					component="label"
					className={classes.button}
					startIcon={<DescriptionIcon />}
				>
					Select File
					<input
						hidden
						accept="image/*"
						type="file"
						onChange={onSelectFile}
					/>
				</Button>
				<Button
					variant="contained"
					color="default"
					className={classes.button}
					startIcon={<FileCopyIcon />}
					onClick={copyImage}
				>
					Copy To Clipboard
				</Button>
			</div>
		</div>
	);
}
