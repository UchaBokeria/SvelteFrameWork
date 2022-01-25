const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './App/Main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  
  resolve: {
    extensions: ['*', '.svelte', '.html', '.ts', '.js', '.scss'],
    modules: ['./node_modules'],
  },
  module: {
    rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
				}
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			},
			{
				// required to prevent errors from Svelte on Webpack 5+
				test: /node_modules\/svelte\/.*\.mjs$/,
				resolve: {
					fullySpecified: false
				}
			},
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  
  plugins: [
    new HtmlWebPackPlugin({
      title: "Svelte",
      favicon: "./Assets/Media/Logo.gif"
    }),

		new MiniCssExtractPlugin({
			filename: '[name].css'
		})

    // new BundleAnalyzerPlugin()
  ]
};