const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/, /raw_data/],
        use: 'ts-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: 'raw-loader'
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        use: 'file-loader',
      },
      {
        test: /\.(atlas|level)$/i,
        use: 'file-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: 'file-loader'
      },
      {
        test: /\.scss/,
        use: [
          MiniCssExtractPlugin.loader,
          {loader: 'css-loader', options: {url: false}},
          'sass-loader'
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true)
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
    new CopyWebpackPlugin([
      {from: 'src/assets', to: 'assets'}
    ])
  ]
}
