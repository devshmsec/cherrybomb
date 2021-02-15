import React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import firebase from "firebase/app";
import "firebase/storage";

class UploadAdapter {
	constructor(loader) {
		this.loader = loader;
	}
	upload() {
		return this.loader.file.then(
			(file) =>
				new Promise((resolve, reject) => {
					// firebase reference
					let uploadTask = firebase
						.storage()
						.ref()
						.child(`${file.name}`)
						.put(file);

					uploadTask.on(
						firebase.storage.TaskEvent.STATE_CHANGED,
						(snapshot) => {
							/* snapshot with info about 
                            the upload progress & metadata */
						},
						(error) => {
							// error handling
							console.error(error);
						},
						() => {
							// upload successful
							uploadTask.snapshot.ref
								.getDownloadURL()
								.then((downloadURL) => {
									resolve({
										default: downloadURL,
									});
								});
						}
					);
				})
		);
	}
}

export default UploadAdapter;
