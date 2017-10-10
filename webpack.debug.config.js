var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './vue-mover.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vue-mover.js',    
  },
  plugins: [  
    new CopyWebpackPlugin([      
       { from: 'vue-mover.css' }
    ]),
  ],
  externals: {
    sortablejs: {      
      root: "Sortable"
    }
  }
};