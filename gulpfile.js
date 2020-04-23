const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass-compile', function(){
	return gulp.src('styles/sass/**/*.sass')
	.pipe(sourcemaps.init())
	.pipe(sass.sync().on('error', sass.logError))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('styles/css'))
})

gulp.task('prefix', function(){
	return gulp.src('styles/css/**/*.css')
	.pipe(autoprefixer({
		overrideBrowserslist: ['last 99 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('styles/css'))
})

gulp.task('watch', function(){
	gulp.watch('styles/sass/**/*.sass', gulp.series('sass-compile', 'prefix'))
})