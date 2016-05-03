const path = require('path');
const hasCoverage = global.process.argv.reduce(function( result, arg ) {
  return arg.indexOf('coverage') !== -1 || result;
});

const includePath = [ path.resolve('./src') ];

/* Set preLoaders and loaders for webpack. */
const preLoaders = hasCoverage ? [
  // Process test code with Babel
  {
    test: /\.spec\.js$/,
    loader: 'babel-loader',
    include: includePath
  }
  // Process all non-test code with iSparta
]

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: [
      // Reference: https://github.com/karma-runner/karma-jasmine
      // Set framework to jasmine
      'jasmine'
    ],

    reporters: [
      // Reference: https://github.com/mlex/karma-spec-reporter
      // Set reporter to print detailed results to console
      'progress',

      // Reference: https://github.com/karma-runner/karma-coverage
      // Output code coverage files
      'coverage'
    ],

    files: [
      'spec.js'
    ],

    preprocessors: {
      // Reference: http://webpack.github.io/docs/testing.html
      // Reference: https://github.com/webpack/karma-webpack
      // Convert files with webpack and load sourcemaps
      'spec.js': ['webpack', 'sourcemaps']
    },

    browsers: [
      // Run tests using PhantomJS
      'PhantomJS'
    ],

    singleRun: true,

    coverageReporter: {
      dir: 'coverage/',
      subdir: '.',
      reporters: [
        { type: 'cobertura', file: 'cobertura.xml' },
        { type: 'text', file: 'text.txt' },
        { type: 'text-summary', file: 'text-summary.txt' },
        { type: 'html' }
      ]
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        preLoaders: [
          {
            test: /\.js$/,
            loader: 'isparta-loader',
            exclude: [
              /node_modules/,
              /\.spec\.js$/
            ]
          }
        ],
        loaders: [

        ]
      }
    },

    webpackMiddleware: {
      stats: {
        chunkModules: false,
        colors: true,
        noInfo: 'errors-only'
      }
    }
  });
};
