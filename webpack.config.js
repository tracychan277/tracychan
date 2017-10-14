const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
    	filename: 'bundle.js',
		path: __dirname + '/public/'
	},
	devServer: {
		inline: true,
		contentBase: './public/',
		port: 3000  
	},
	module: {
	    loaders: [
	    	{
	        	test: /\.json$/,
	        	include: __dirname + '/src',
				loader: 'json-loader'
	    	},
	    	{
		    	test: /\.js$/,
		    	include: __dirname + '/src',
		    	loader: 'babel-loader',
		    	options: {
			    	presets: ['react', 'env'],
			    	plugins: ['transform-class-properties', 'syntax-object-rest-spread']
		    	}
	    	},
	    	{
		    	test: /\.js$/,
		    	include: __dirname + '/src',
		    	loader: 'eslint-loader'
	    	},
	    	{
		    	test: /\.scss$/,
		    	include: __dirname + '/src/styles',
		    	loader: 'style-loader!css-loader!postcss-loader!sass-loader'
	    	}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			minify: {
				collapseWhitespace: true
			},
			template: 'index.template.ejs',
			inject: 'body'
		}),
		new UglifyJSPlugin({
			test: /\.js$/,
			sourceMap: true
		})
	]
};
