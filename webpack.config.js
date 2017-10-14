module.exports = {
	entry: './src/index.js',
	output: {
    	filename: 'index.js',
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
				loader: 'json-loader'
	    	},
	    	{
		    	test: /\.js$/,
		    	include: __dirname + '/src',
		    	loader: 'babel-loader',
		    	options: {
			    	presets: ['react', 'env']
		    	}
	    	}
		]
  	}
};