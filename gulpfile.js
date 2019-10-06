const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

var Config = require('./config.js');
const config = new Config();
var src = config.getSrc();
var public = config.getPublic();


gulp.task('sass', function () {
    return gulp.src(`${src}/scss/**/*.scss`) // Gets all files ending with .scss in app/scss
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(`${public}`));
});

gulp.task('watch', function(){
    gulp.watch(`${src}/scss/**/*.scss`,gulp.parallel('sass'));
});

gulp.task('default', gulp.series('sass','watch'));