const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
		historyApiFallback: true,
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
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				include: __dirname + '/src/styles',
				loader: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [
								require('autoprefixer')
							]
						}
					},
					'sass-loader',
				]
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
	plugins: [
		new webpack.EnvironmentPlugin(['NODE_ENV']),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			Popper: ['popper.js', 'default']
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			inject: 'body',
			favicon: './favicon.ico',
			title: 'Tracy Chan | Personal Website',
			meta: {
				'Content-type': {'http-equiv': 'Content-type', 'content': 'text/html; charset=utf-8'},
				viewport: 'width=device-width, initial-scale=1'
			}
		})
	]
};
