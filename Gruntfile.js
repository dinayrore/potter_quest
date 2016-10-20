module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    loadPath: require('bourbon').includePaths
                },
                files: {
                    'app/assets/stylesheets/main.min.css': 'app/assets/stylesheets/sass/main.scss'
                }
            }
        },

        haml: {
            dist: {
                files: {
                    'app/views/pages/index-haml.fe.html': 'app/views/pages/index.html.haml',
                    'app/views/pages/login-haml.fe.html': 'app/views/pages/login.html.haml',
                    'app/views/pages/leaderboard-haml.fe.html': 'app/views/pages/leaderboard.html.haml',
                    'app/views/pages/profile-haml.fe.html': 'app/views/pages/profile.html.haml',
                    'app/views/pages/game-haml.fe.html': 'app/views/pages/game.html.haml'

                }
            }
        },

        watch: {
            css: {
                files: ['app/assets/stylesheets/sass/**/*'],
                tasks: ['sass']
            },

            html: {
              files: ['app/views/pages/*.haml'],
              tasks: ['haml']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-haml2html');
    grunt.registerTask('default', [
        'sass',
        'watch',
        'haml'
    ]);
};
