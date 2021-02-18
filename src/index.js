import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import "firebase/analytics";

// Components
import App from "./components/App";

// Styles
import "./styles/colors.scss";
import "./styles/styles.scss";

// firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyCJbxWy0Vfl-Gl_dYzAWxmbRpfVZLnHyNI",
	authDomain: "cherrybomb-c484d.firebaseapp.com",
	projectId: "cherrybomb-c484d",
	storageBucket: "cherrybomb-c484d.appspot.com",
	messagingSenderId: "981097014525",
	appId: "1:981097014525:web:ef76cc17d402bd464b0a94",
	measurementId: "G-LT18MXF7ZS",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(<App />, document.getElementById("root"));
