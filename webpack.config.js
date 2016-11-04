var HTMLWebPackPlugin = require('html-webpack-plugin');
var HTMLWebPackPluginConfig = new HTMLWebPackPlugin({
	template: __dirname+ '/app/index.html',
	filename: 'index.html',
	inject: 'body'	
	});

module.exports = {
  entry: __dirname + '/app/index.js',
  output: {
    path: __dirname+"/build",
    filename: 'transformed.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        exclude : /node_modules/,
        loader : 'babel-loader'
      }
    ]
  },
  plugins: [HTMLWebPackPluginConfig]
};
