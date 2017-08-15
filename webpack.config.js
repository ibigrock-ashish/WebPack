var path = require('path')
var webpack = require('webpack')

module.exports = {
	context : __dirname + '/src',
	entry: [ "./js/button1.js","./js/button2.js","./css/style.css"],
	output: {
			filename: 'bundle.js',
			path : __dirname + '/dist'
			},

	module: {
		rules: [
		{
			test: /\.js$/,
		 	use : [ 'script-loader' ],
		 	include : __dirname + '/src',
		 	exclude : /node_modules/
		 },{ 
		 	test: /\.css$/,
		 	exclude : /node_modules/,
		 	use: [ 'style-loader', 'css-loader' ]
		 }
		]
	}
};