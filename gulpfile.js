// made while watching Brad Traversy's Gulp crash course

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
let rename = require("gulp-rename");
let uglify = require('gulp-uglify-es').default;
let sass = require('gulp-sass');

/*
    REMEMBER THESE MAIN GULP FUNCTIONS!
    gulp.task - Define a task;
    gulp.src - Point to files to use;
    gulp.dest - point to folder to output
    gulp.watch - watch files and folders for changes
*/

// Copy HTML
gulp.task('copyHtml', function(){
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

//minify an image
exports.imageMin = () => (
	gulp.src('src/media/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/media'))
);

//minify JavaScript
gulp.task("uglify", function () {
	return gulp.src("src/js/main.js")
		.pipe(rename("main.min.js"))
		.pipe(uglify(/* options */))
		.pipe(gulp.dest("dist/js"));
});

//Compile Sass
sass.compiler = require('node-sass');
gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});