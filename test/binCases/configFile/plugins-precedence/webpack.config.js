var DefinePlugin = require('webpack').DefinePlugin;
var path = require("path");

module.exports = {
	entry: path.resolve(__dirname, "./index"),
	plugins: [
		new DefinePlugin({
			TEST: JSON.stringify("fail")
		})
	]
};
