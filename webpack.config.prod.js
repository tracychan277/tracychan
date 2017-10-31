const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	devtool: 'source-map',
	output: {
		filename: 'bundle.min.js',
		path: __dirname + '/build'
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
				test: /\.scss$/,
				include: __dirname + '/src/styles',
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								minimize: true,
								sourceMap: true
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: () => [
									require('autoprefixer')
								]
							}
						},
						'sass-loader'
					]
				})
			}
		]
	},
	plugins:
	[
		new webpack.EnvironmentPlugin(['NODE_ENV']),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			Popper: ['popper.js', 'default']
		}),
		new HtmlWebpackPlugin({
			minify: {
				collapseWhitespace: true
			},
			template: 'index.template.ejs',
			inject: 'body'
		}),
		new ExtractTextPlugin('styles.css'),
		new webpack.optimize.UglifyJsPlugin({minimize: true}),
		new CompressionPlugin({
			asset: '[path].gz[query]',
			algorithm: 'gzip',
			test: /\.js$|\.css$/,
			threshold: 10240,
			minRatio: 0.8
		})
	]
};
