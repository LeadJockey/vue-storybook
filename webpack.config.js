const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = (env, argv) => ({
  mode: argv.mode,
  entry: ['./src/main.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'build.[name].js'
  },
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    disableHostCheck: true,
    historyApiFallback: true,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
        }
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(s*)css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new VueLoaderPlugin(),
    new HtmlWebPackPlugin({
      template: './src/assets/index.html',
      filename: 'index.html',
      favicon: './src/assets/favicon.ico'
    })
  ]
})
