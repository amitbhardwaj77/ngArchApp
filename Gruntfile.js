module.exports = function (grunt) {

	//npm tasks
	var npmTasks = [
		'grunt-contrib-clean',
		'grunt-angular-templates',
		'grunt-injector',
		'grunt-contrib-copy',
		'grunt-contrib-concat',
		'grunt-karma',
		'grunt-http-server',
		'grunt-contrib-less'
		];


	//grunt tasks
	var serve = [
		'clean',
		'copy',
		'less',
		'ngtemplates',
		'concat',
		'injector',
		'http-server'
		];
	var test = [
		'clean',
		'copy',
		'ngtemplates',
		'concat',
		'injector',
		'karma'
		];

	//inject scripts
	var transformScript = function(replacement) {
  		return function(filePath) {
    		filePath = filePath.replace(replacement, '');
    		return '<script language="javascript" type="text/javascript" src="' + filePath + '"></script>';
  		};
	};
	var configJson = {
		pkg: grunt.file.readJSON('package.json'),
		'http-server': {
 
        'dev': { 
            root: '.tmp',
            port: 9000,
            host: "0.0.0.0",
            showDir : true,
            autoIndex: true,
 
            // server default file extension
            ext: "html",
 
            // run in parallel with other tasks
            runInBackground: false, 
            // Tell grunt task to open the browser
            openBrowser : true
        }
 
    },
		karma:{
			unit:{
			    configFile: 'test/karma.conf.js',
			    background: false,
			    singleRun: true,
			    runnerPort: 9999,
			    reportSlowerThan: 100,
			    logLevel: 'INFO',
			    client: {
			      mocha:{
			        timeout: 180000
			      }
			    }
  			}
		},
		concat:{
			files:{
				src:'scripts/**/*.js',
				dest:'.tmp/concat/scripts.js'
			}
		},
		copy:{
			index:{
				src:'index.html',
				dest:'.tmp/index.html'
			},
			javascript:{
				src:'scripts/**/*.js',
				dest:'.tmp/'
			},
			bower:{
				src:'bower_components/**/*.js',
				dest:'.tmp/'
			},
			bowerCSS:{
				src:'bower_components/**/*.css',
				dest:'.tmp/'
			},
			css:{
				src:'styles/**/*.css',
				dest:'.tmp/'
			}
		},
		clean: ['.tmp'],
		ngtemplates:{
			app:{
				src:'scripts/**/*.html',
				dest:'.tmp/concat/templates.js'
			},
			options:{
				module:'ngArchApp',
				htmlmin:{
				    collapseWhitespace:true,
				    removeComments:true,
				    removeEmptyAttributes:true,
				    removeRedundantAttributes:true
				}
			}
		},
		injector: {
    		js: {
    			options: {
    				starttag:'<!-- injector:js -->',
	      			transform: transformScript('/.tmp/'),
	      			template: '.tmp/index.html'
    			},
			    files: {
			      '.tmp/index.html': ['.tmp/concat/**/*.js']
			    }
  			}
  		},
  		less: {
		  development: {
		  	options:{
		  		paths:['styles/'],
		  		cleancss: true
		  	},
		  	files : [ {
      			expand : true,
      			cwd : "./styles",
      			src: "**/*.less",
      			dest : "./.tmp/styles",
      			ext : ".css"
    		} ]
  		}
	}
	};

	

	//configure grunt
	grunt.initConfig(configJson);
	//register grunt tasks
	grunt.registerTask('serve', serve);
	grunt.registerTask('test', test);

	//load npm tasks
	for(var index=0;index<npmTasks.length;index++){
		grunt.loadNpmTasks(npmTasks[index]);
	}


}