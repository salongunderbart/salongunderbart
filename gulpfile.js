const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

// gulp.task('default', ['clean'], () =>  {
//     gulp.start('build');
// });

gulp.task('default', ['copy', 'styles', 'images', 'scripts'], () => {
    gulp.start('inlinehtml');
});

// gulp.task('build', ['copy', 'styles', 'images', 'scripts', 'inlinesource'], () => {
//     console.log('build done');
// });

gulp.task('clean', () => {
    return gulp.src(['./dist'], { read: false })
        .pipe($.clean());
});

gulp.task('copy', () => {
  	return gulp.src(['app/*.html', 'app/robots.txt', 'app/apple-touch-icon.png', 'app/favicon-16x16.png', 'app/favicon-32x32.png'])
    	.pipe(gulp.dest('./dist'));
});

gulp.task('styles', () => {
    return gulp.src('app/css/main.scss')
        .pipe($.sass())
        .pipe($.autoprefixer('last 2 version'))
        .pipe($.rename('main.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('images', () => {
	return gulp.src('app/img/*')
		.pipe($.imagemin({
			optimizationLevel: 3,
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest('./dist/img'));
});

gulp.task('scripts', () => {
    return gulp.src(['app/js/**/*.js'])
        .pipe($.concat('main.js'))
        .pipe($.uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('inlinehtml', function () {
    return gulp.src('dist/*.html')
        .pipe($.save('before-sitemap'))
        .pipe($.sitemap({
            siteUrl: 'https://salongunderbart.github.io/',
            getLoc: function(siteUrl, loc, entry) {
                if (loc.endsWith('.html')) {
                    return loc.substr(0, loc.lastIndexOf('.'));
                } else if (loc.endsWith('/')) {
                    return loc.substr(0, loc.lastIndexOf('/'));
                }

                return loc;
            }
        }))
        .pipe(gulp.dest('./dist'))
        .pipe($.save.restore('before-sitemap'))
        .pipe($.inlineSource())
        .pipe(gulp.dest('./dist'));
});

gulp.task('connect', function() {
    $.connect.server({
        root: 'app',
        port: 8000,
        livereload: true
    });
});

gulp.task('serve', ['connect']);
