const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const METADATA = {
  isProduction: process.env.NODE_ENV === 'production',
  port: 9090,
  publicPath: path.resolve(__dirname, 'dist')
};

// We point to our static assets
app.use(bodyParser());
app.use(express.static(METADATA.publicPath));

// Set up our routes
// app.get('/api/vehicles', function(request, response) {
//   response.send(vehiclesApi.fetchVehicles());
// });

// Run the server
app.listen(METADATA.port, function () {
  console.log( 'Server running on port ' + METADATA.port );
});
