var path = require('path');

module.exports = {
  entry: './App.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  }
};