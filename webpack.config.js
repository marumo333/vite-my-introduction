const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: './src/index.js', // クライアント用のエントリポイントに変更
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/, // jsx 拡張子を含む
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'], // jsx を追加
    alias: {
      "path": "path-browserify",
    },
    fallback: {
      // 省略...
    },
  },
  target: 'web', // クライアントサイド用
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: 'public', 
          to: '.', 
          globOptions: {
            ignore: ['**/index.html'], // index.html を除外
          },
        },
      ],
    }),
  ],
};
