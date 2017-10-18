const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	devtool: 'source-map',
	output: {
    	filename: 'bundle.min.js',
		path: __dirname + '/public/'
	},
	devServer: {
		clientLogLevel: 'none',
		inline: true,
		contentBase: './public/',
		watchContentBase: true,
		port: 3000,
		hot: true,
		stats: 'errors-only',
		watchOptions: {
			ignored: /node_modules/
		}
	},
	module: {
	    loaders: [
			{
				enforce: 'pre',
		    	test: /\.js$/,
		    	include: __dirname + '/src',
		    	loader: 'eslint-loader',
		    	options: {
			    	failOnWarning: false,
			    	failOnError: true
		    	}
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
		    	
		    	loader: [
			    	{
				    	loader: 'style-loader'
			    	},
			    	{
				    	loader: 'css-loader'
			    	},
			    	{
				    	loader: 'postcss-loader',
				    	options: {
					    	plugins: () => [
					    		require('autoprefixer')
							]
				    	}
			    	},
			    	{
				    	loader: 'sass-loader'
			    	}
		    	]
	    	}
		],
	},
	plugins: [
		new webpack.EnvironmentPlugin(['NODE_ENV']),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
};
