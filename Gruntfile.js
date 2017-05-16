module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			options: {
				sourcemap: 'none'
			},
			dist: {
	      files: [{
	        expand: true,
	        cwd: 'scss',
	        src: ['*.scss'],
	        dest: 'build/css',
	        ext: '.css'
	      }]
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			},
      ejs: {
        files: '**/*.ejs',
        tasks: ['ejs']
      }
		},
    ejs: {
      all: {
				src: ['**/*.ejs', '!partials/**/*.ejs', '!node_modules/**/*.ejs'],
				cwd: 'templates',
				dest: 'build/',
				expand: true,
				ext: '.html',
				options: {}
      }
    }
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-ejs-locals');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}
