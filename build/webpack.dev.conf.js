var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrors = require('friendly-errors-webpack-plugin')
var projectsConfig = require('./../config/projectsConfig')
var projects = projectsConfig.projects

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(
    baseWebpackConfig.entry[name]
  )
})

const plugins = [
  new webpack.DefinePlugin({
    'process.env': config.dev.env,
    __STAGE__: "'dev'"
  }),
  // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  // https://github.com/ampedandwired/html-webpack-plugin

  new FriendlyErrors()
  // new HtmlWebpackPlugin({
  //     filename: 'index.html',
  //     template: 'src/templates/example.html',
  //     inject: true
  // }),
  // ,
  // new HtmlWebpackPlugin({
  //   filename: 'ppt.html',
  //   template: 'src/templates/index.html',
  //   inject: true
  // })
]

var entries = {}

projects.forEach(function (projectsObj, index) {
  plugins.push(new HtmlWebpackPlugin(projectsObj.HtmlWebpackPlugin))
})

projects.forEach(function (projectsObj, index) {
  const entry = projectsObj.entry
  entry.forEach(function (e, i) {
    entries[entry[i]] = './src/entries/' + entry[i] + '.js'
  })
})
module.exports = merge(baseWebpackConfig, {
  entry: entries,
  module: {
    loaders: utils.styleLoaders({sourceMap: config.dev.cssSourceMap})
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: plugins
})
