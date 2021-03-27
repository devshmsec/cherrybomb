const path = require("path");

const ElectronReloadPlugin = require("webpack-electron-reload")({
	path: path.join(__dirname, "main.js"),
});

module.exports = {
	mode: "development",
	entry: {
		index: "./src/index.js",
	},
	devtool: "inline-source-map",
	stats: {
		preset: "minimal",
		colors: true,
	},
	target: "electron-main",
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
									targets: { esmodules: true },
								},
							],
							"@babel/preset-react",
						],
						plugins: [
							[
								"@babel/plugin-proposal-class-properties",
								{
									loose: true,
								},
							],
						],
					},
				},
			},
			{
				test: [/\.s[ac]ss$/i, /\.css$/i],
				use: [
					{
						// inject CSS to page
						loader: "style-loader",
					},
					{
						// translates CSS into CommonJS modules
						loader: "css-loader",
					},
					{
						// compiles Sass to CSS
						loader: "sass-loader",
					},
				],
			},
		],
	},
	plugins: [ElectronReloadPlugin("electron-renderer")],
	resolve: {
		extensions: [".js", ".jsx"],
	},
	output: {
		filename: "renderer.js",
		path: path.resolve(__dirname, "build", "js"),
	},
};
