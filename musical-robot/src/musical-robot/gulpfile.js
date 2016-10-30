/// <binding BeforeBuild='build' />
var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var libs = './wwwroot/libs/';
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('default', function () {
	// place code for your default task here
});

gulp.task('restore:core-js', ['clean:lib'], function () {
	gulp.src([
        'node_modules/core-js/client/*.js'
	]).pipe(gulp.dest(libs + 'core-js'));
});
gulp.task('restore:zone.js', ['clean:lib'], function () {
	gulp.src([
        'node_modules/zone.js/dist/*.js'
	]).pipe(gulp.dest(libs + 'zone.js'));
});
gulp.task('restore:reflect-metadata', ['clean:lib'], function () {
	gulp.src([
        'node_modules/reflect-metadata/reflect.js'
	]).pipe(gulp.dest(libs + 'reflect-metadata'));
});
gulp.task('restore:systemjs', ['clean:lib'], function () {
	gulp.src([
        'node_modules/systemjs/dist/*.js'
	]).pipe(gulp.dest(libs + 'systemjs'));
});
gulp.task('restore:rxjs', ['clean:lib'], function () {
	gulp.src([
        'node_modules/rxjs/**/*.js'
	]).pipe(gulp.dest(libs + 'rxjs'));
});
gulp.task('restore:angular-in-memory-web-api', ['clean:lib'], function () {
	gulp.src([
        'node_modules/angular-in-memory-web-api/**/*.js'
	]).pipe(gulp.dest(libs + 'angular-in-memory-web-api'));
});

gulp.task('restore:angular2-google-maps', ['clean:lib'], function () {
	gulp.src([
        'node_modules/angular2-google-maps/**/*.js'
	]).pipe(gulp.dest(libs + 'angular2-google-maps'));
});

gulp.task('restore:ng2-charts', ['clean:lib'], function () {
	gulp.src([
		'node_modules/ng2-charts/**/*.js'
	]).pipe(gulp.dest(libs + 'ng2-charts'));
});

gulp.task('restore:charts-js', ['clean:lib'], function () {
	gulp.src([
        'node_modules/chart.js/dist/chart.js'
	]).pipe(gulp.dest(libs + 'chart.js'));
});

gulp.task('restore:angular', ['clean:lib'], function () {
	gulp.src([
        'node_modules/@angular/**/*.js'
	]).pipe(gulp.dest(libs + '@angular'));
});

gulp.task('restore:bootstrap', ['clean:lib'], function () {
	gulp.src([
        'node_modules/bootstrap/dist/**/*.*'
	]).pipe(gulp.dest(libs + 'bootstrap'));
});

gulp.task('build:lib-restore', [
    'restore:core-js',
    'restore:zone.js',
    'restore:reflect-metadata',
    'restore:systemjs',
    'restore:rxjs',
    'restore:angular-in-memory-web-api',
    'restore:angular',
    'restore:bootstrap',
	'restore:angular2-google-maps',
	'restore:ng2-charts',
	'restore:charts-js'
]);

gulp.task('build:ts-compile', ['clean:app'], function () {
    gulp.src('app/**/*.js').pipe(gulp.dest('./wwwroot/app/'));
});

gulp.task('build', ['build:ts-compile', 'build:lib-restore', 'build:sass', 'build:copy-html'], function () {

});

gulp.task('clean:app', [], function () {
	return del(['./wwwroot/app/**/*']);
});

gulp.task('clean:lib', [], function () {
	return del(['./wwwroot/lib/**/*']);
});

gulp.task('build:sass', [], function () {
	gulp.src('styling/app.scss')
        .pipe(sass({
        	includePaths: [
				'./node_modules/bootstrap-sass/assets/stylesheets'
        	],
        	errorLogToConsole: true
        }))
		.pipe(cleanCSS())
		.pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest('./wwwroot/css'));
});

gulp.task('build:copy-html', [], function () {
	gulp.src('app/**/*.html')
		.pipe(gulp.dest('./wwwroot/app'));
});