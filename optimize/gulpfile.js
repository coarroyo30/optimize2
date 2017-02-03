"use strict";

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglifycss = require('gulp-uglifycss'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
    changed = require('gulp-changed'),
   	imagemin = require('gulp-imagemin');

gulp.task("concatScripts", function() {
	return gulp.src([
		'js/jquery.js',
		'js/fastclick.js',
		'js/foundation.js',
		'js/foundation.equalizer.js',
		'js/foundation.reveal.js',
		'js/scripts.js'])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('js'));
});

gulp.task("minifyCSS", function() {
	return gulp.src("css/styles.css")
		.pipe(uglifycss())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('css'));
});

gulp.task("minifyScripts",['concatScripts'], function(){
	return gulp.src("js/app.js")
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('js'));
});

gulp.task('imagemin', function() {
	var imgDst = 'build/img';

	gulp.src('img/**/*.+(png|jpg|gif)')
		.pipe(changed(imgDst))
		.pipe(imagemin())
		.pipe(gulp.dest(imgDst));
});

gulp.task('watchAll', function() {
	gulp.watch(['css/*.css','!css/style.css', '!css/style.min.css'], ['minifyCSS']);
	gulp.watch(['js/*.js','!js/app.js', '!js/app.min.js'], ['minifyScripts']);
});

gulp.task('build', ['minifyCSS', 'minifyScripts']);

gulp.task('default', ['build', 'imagemin']);

