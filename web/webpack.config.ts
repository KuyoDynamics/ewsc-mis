import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import path from 'path';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

const config: webpack.Configuration = {
  mode: 'development',
  entry: {
    main: './src/index.tsx',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin()],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[contenthash].js',
    assetModuleFilename: '[name][ext]',
    clean: true,
  },
  // devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: 'asset/resource' },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  devServer: {
    host: 'localhost',
    hot: true,
    open: true,
    liveReload: true,
    compress: true,
    port: 9000,
    allowedHosts: 'all',
    bonjour: true,
    historyApiFallback: true,
    static: './dist',
    client: {
      overlay: true,
      progress: true,
      reconnect: true,
    },
    proxy: {
      '/api': 'http://localhost:4000/api',
      secure: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};

export default config;
