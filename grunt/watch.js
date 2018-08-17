/* jshint node:true */
// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
	js: {
		files: [
			'assets/js/src/**.js',
		],
		tasks: [ 'uglify:scripts' ]
	},
	customizerJs: {
		files: [
			'inc/customizer/controls/js/*.js',
		],
		tasks: [ 'uglify:customizerControls' ]
	},
	sass: {
		files: [ 'assets/sass/**/*.scss' ],
		tasks: [ 'sass:style' ]
	},
	customizerSass: {
		files: [
			'inc/customizer/controls/css/*.css',
			'inc/addons/customizer/controls/css/*.css',
		],
		tasks: [ 'concat:customizerStyle' ]
	},
};