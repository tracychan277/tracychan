const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	devtool: 'source-map',
	output: {
		filename: '[hash].min.js',
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
				loader: 'babel-loader'
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
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader',
				options: {
					limit: 100000
				}
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
			inject: 'body',
			template: HtmlWebpackTemplate,
			favicon: './favicon.ico',
			title: 'Tracy Chan | Personal Website',
			meta: {
				'Content-type': {'http-equiv': 'Content-type', 'content': 'text/html; charset=utf-8'},
				viewport: 'width=device-width, initial-scale=1'
			},
			appMountId: 'root'
		}),
		new ExtractTextPlugin('[contenthash].css'),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			sourceMap: true
		})
	]
};
