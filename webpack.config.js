const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
	entry: './src/index.js',
	devtool: 'source-map',
	output: {
    	filename: 'bundle.min.js',
		path: __dirname + '/public/'
	},
	devServer: {
		inline: true,
		contentBase: './public/',
		watchContentBase: true,
		port: 3000,
		hot: true,
		quiet: true,
		watchOptions: {
			ignored: /node_modules/
		}
	},
	module: {
	    loaders: [
			{
		    	test: /\.js$/,
		    	include: __dirname + '/src',
		    	loader: 'eslint-loader'
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
	        	test: /\.json$/,
	        	include: __dirname + '/src',
				loader: 'json-loader'
	    	},
	    	{
		    	test: /\.scss$/,
		    	include: __dirname + '/src/styles',
		    	loader: 'style-loader!css-loader!postcss-loader!sass-loader'
	    	}
		]
	},
	plugins: PROD ? [
		new HtmlWebpackPlugin({
			minify: {
				collapseWhitespace: true
			},
			template: 'index.template.ejs',
			inject: 'body'
		}),
		new webpack.optimize.UglifyJsPlugin({minimize: true})
	] : []
};
