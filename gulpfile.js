const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const tsProject = ts.createProject('tsconfig.json', {rootDir: './'});

gulp.task('dist', (done) => {
	gulp.src(['./components/**/*.{ts,tsx}'])
        .pipe(tsProject())
		.pipe(babel({
			envName: 'dist',
		}))
		.pipe(babel({
			envName: 'lib',
		}))
		.pipe(gulp.dest('./dist'));

	gulp.src('./components/**/*.{svg,png,jpg,jpeg,gif,json}')
		.pipe(gulp.dest('./dist'));

	done();
});