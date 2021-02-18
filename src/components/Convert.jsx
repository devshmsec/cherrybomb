import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
const ffmpeg = createFFmpeg({ log: true });
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import DescriptionIcon from "@material-ui/icons/Description";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(2),
	},
}));

const copyToClipboard = async (Blob) => {
	try {
		await navigator.clipboard.write([
			// eslint-disable-next-line no-undef
			new ClipboardItem({
				[Blob.type]: Blob,
			}),
		]);
		console.log("Image copied");
	} catch (error) {
		console.error(error);
	}
};

export default function VideoUploader() {
	// hooks
	const [ready, setReady] = useState(false);
	const [video, setVideo] = useState();
	const [gif, setGif] = useState();
	const classes = useStyles();

	const load = async () => {
		await ffmpeg.load();
		setReady(true);
	};

	useEffect(() => {
		load();
	}, []);

	const convertToGif = async () => {
		ffmpeg.FS("writeFile", "test.mp4", await fetchFile(video));
		await ffmpeg.run(
			"-i",
			"test.mp4",
			"-t",
			"2.5",
			"-ss",
			"2.0",
			"-f",
			"gif",
			"out.gif"
		);
		const data = ffmpeg.FS("readFile", "out.gif");
		const image = new Blob([data.buffer], { type: "image/gif" });
		const url = URL.createObjectURL(image);
		console.log(url);
		setGif(url);
	};

	return ready ? (
		<>
			{video && (
				<video
					controls
					width="780"
					src={URL.createObjectURL(video)}
				></video>
			)}

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
					type="file"
					onChange={(e) => setVideo(e.target.files?.item(0))}
				/>
			</Button>

			{video && (
				<Button
					variant="contained"
					color="secondary"
					className={classes.button}
					startIcon={<AutorenewIcon />}
					onClick={convertToGif}
				>
					Convert
				</Button>
			)}

			{gif && (
				<>
					<img src={gif} width="780" />
					<Button
						variant="contained"
						color="secondary"
						className={classes.button}
						startIcon={<CloudDownloadIcon />}
						onClick={convertToGif}
					>
						Download
					</Button>
				</>
			)}
		</>
	) : (
		<Backdrop open={ready}>
			<CircularProgress color="inherit" />
		</Backdrop>
	);
}
