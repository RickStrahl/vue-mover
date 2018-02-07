var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: './vue-mover.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vue-mover.min.js',    
  },
  plugins: [    
    new UglifyJSPlugin( { sourceMap: true }),
    
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /.css$/g,      
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
    })

  ],
  externals: {
    sortablejs: {      
      root: "Sortable"
    }
  }
};