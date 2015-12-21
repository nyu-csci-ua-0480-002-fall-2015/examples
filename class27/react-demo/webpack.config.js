var path = require('path');
module.exports = {
  // configure the entry point
  entry: './client.js',

  output: {
    path: path.join(__dirname, '/public'),
    filename: 'javascripts/bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [ {
      exclude: /node_modules|app.js|routes/,
      loader: 'babel',
      query: { presets:['react'] }
    }] 
  }
};
