import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
// in case you run into any typescript error when configuring `devServer`
import "webpack-dev-server";

const config: webpack.Configuration = {
  mode: "development",
  entry: {
    main: "./src/index.tsx",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].[contenthash].js",
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
  devServer: {
    host: "localhost",
    hot: true,
    liveReload: true,
    watchFiles: [".ts", ".tsx", ".html"],
    compress: true,
    port: 9000,
    allowedHosts: "all",
    bonjour: true,
    static: {
      directory: path.join(__dirname, "/dist/"),
      publicPath: "/",
      serveIndex: true,
    },
    client: {
      overlay: true,
      progress: true,
      reconnect: true,
    },
    proxy: {
      "/api": "http://localhost:4000/graphql",
      secure: false, // can be changed later
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
};

export default config;
