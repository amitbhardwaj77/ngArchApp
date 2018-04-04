module.exports = function (config) {
	config.set({
    	basePath: '..',
    	frameworks: ['mocha', 'chai'],
    	files: [
      		'bower_components/angular/angular.js',
          'bower_components/angular-ui-select/dist/select.js',
      		'bower_components/angular-sanitize/angular-sanitize.js',
      		'bower_components/angular-ui-router/release/angular-ui-router.js',
      		'bower_components/angular-mocks/angular-mocks.js',
      		'test/spec/**/*.js',
      		'.tmp/scripts/**/*.js'
    	],
    	browsers: [process.env['browser'] || 'Chrome'],
    	singleRun: false,
   		browserNoActivityTimeout: 100000,
   		preprocessors: {
      		'.tmp/scripts/**/*.js': 'coverage'
   		},
    	reporters: process.env['REPORTERS'] || ['spec', 'coverage'],
      specReporter:{

      },
    	coverageReporter: {
      		type: 'lcov',
      		dir: '.tmp/report/coverage-report/'
    	},
    	plugins: [
  			'karma-coverage',
  			'karma-chrome-launcher',
  			'karma-mocha',
  			'karma-chai',
  			'karma-sinon',
        'karma-spec-reporter'
		],
    	client: {
      		mocha:{
        	timeout: 15000
      	}
    }
	});
};