const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	devtool: "inline-source-map",
	target: "electron-renderer",
	module: {
		rules: [
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							[
								"@babel/preset-env",
								{
									targets: {
										esmodules: true,
									},
								},
							],
							"@babel/preset-react",
						],
					},
				},
			},
			{
				test: [/\.s[ac]ss$/i, /\.css$/i],
				use: [
					// [style-loader](/loaders/style-loader)
					{ loader: "style-loader" },
					// [css-loader](/loaders/css-loader)
					{
						loader: "css-loader",
						options: {
							modules: true,
						},
					},
					// [sass-loader](/loaders/sass-loader)
					{ loader: "sass-loader" },
				],
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	output: {
		filename: "app.js",
		path: path.resolve(__dirname, "build", "js"),
	},
};
