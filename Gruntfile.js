/**
 * Grunt configuration
 */

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			css: {
				files: ['css/build/*.css'],
				tasks: ['concat', 'cssmin']
			}
		},

		concat: {
			options: {
				separator: '\n\n',
			},
			dist: {
				src: ['css/build/base.css', 'css/build/*.css'],
				dest: 'css/main.css'
			}
		},

		cssmin: {
			target: {
				files: {
					'css/main.min.css': 'css/main.css'
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['concat', 'cssmin', 'watch']);

};