var gulp = require('gulp'),
    plugin = require('gulp-load-plugins')(),
    browserify = require('browserify'),
    transform = require('vinyl-transform'),
    express = require('express'),
    port = 8080;

gulp.task('js', function () {
    gulp.src('./src/js/main.js')
        .pipe(plugin.sourcemaps.init())
        .pipe(transform(function (filename) {
            return browserify(filename).bundle();
        }))
        .pipe(plugin.ngAnnotate())
        //.pipe(plugin.uglify()) // TODO Uglify with AngularJS bundled within browserify...
        .pipe(plugin.sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('sass', function () {
    gulp.src('./src/sass/main.scss')
        .pipe(plugin.sourcemaps.init())
        .pipe(plugin.sass())
        .pipe(plugin.autoprefixer())
        .pipe(plugin.cssmin())
        .pipe(plugin.sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('views', function () {
    gulp.src('./src/views/**/*.html')
        .pipe(plugin.htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist/views'));
});

gulp.task('build', ['js', 'sass', 'views']);

gulp.task('watch', ['build'], function () {
    gulp.watch('./src/js/**/*.js', ['js']);
    gulp.watch('./src/sass/**/*.{scss,sass}', ['sass']);
    gulp.watch('./src/views/**/*.html', ['views']);
});

gulp.task('serve', function () {
    var server = express();
    server.use(express.static('./dist'));
    server.get('/*', function (req, res) {
        res.sendFile(__dirname + '/dist/index.html');
    });
    server.listen(port);
});

gulp.task('default', ['serve', 'build', 'watch']);
