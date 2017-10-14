var webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
    	filename: 'bundle.js',
		path: __dirname + '/public/assets',
		publicPath: 'assets'
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
			    	presets: ['react', 'env']
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
  	}
};