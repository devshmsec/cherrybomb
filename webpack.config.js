const path = require("path");

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
						presets: ["@babel/preset-env", "@babel/preset-react"],
						plugins: ["@babel/plugin-proposal-class-properties"],
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
			{
				test: /\.(png|jpg|gif|svg)$/i,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 8192,
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			"@assets": path.resolve(__dirname, "assets"),
			"@components": path.resolve(__dirname, "src", "components"),
			"@interfaces": path.resolve(
				__dirname,
				"src",
				"components",
				"interfaces"
			),
			"@views": path.resolve(__dirname, "src", "components", "views"),
			"@redux": path.resolve(__dirname, "src", "redux"),
			"@styles": path.resolve(__dirname, "src", "styles"),
			"@utils": path.resolve(__dirname, "src", "utils"),
			"@src": path.resolve(__dirname, "src"),
			"@node_modules": path.resolve(__dirname, "node_modules"),
		},
	},
	output: {
		filename: "renderer.js",
		path: path.resolve(__dirname, "public"),
	},
	devServer: {
		contentBase: path.join(__dirname, "public"),
		index: "index.html",
		hot: false,
		watchContentBase: true,
		liveReload: true,
		port: 9000,
	},
};
