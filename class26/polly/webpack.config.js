var path = require('path');
module.exports = {
  // start js file on client
  entry: './client.js',

  output: {
    path: path.join(__dirname, '/public'),
    filename: 'javascripts/bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [ {
      // we don't need to run babel on app and node_modules (and probably others!)
      exclude: /node_modules|app.js|routes/,
      loader: 'babel',
      query: { presets:['react'] }
    }] 
  }

};
