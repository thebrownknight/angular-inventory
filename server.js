const express = require('express');
const path = require('path');

const app = express();

const METADATA = {
  isProduction: process.env.NODE_ENV === 'production',
  port: 9090,
  publicPath: path.resolve(__dirname, 'dist')
};

// We point to our static assets
app.use(express.static(METADATA.publicPath));

// Run the server
app.listen(METADATA.port, function () {
  console.log( 'Server running on port ' + METADATA.port );
});
