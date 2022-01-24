const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './App/App.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['*', '.svelte', '.ts', '.js', '.scss'],
    modules: ['./node_modules'],
  },
  module: {
    rules: [
        
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

    // new BundleAnalyzerPlugin()
  ]
};