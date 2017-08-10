var gulp = require('gulp');
var sass = require('gulp-sass');
var neat = require("bourbon-neat").includePaths;

gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass({
            sourceComments: true,
            outputStyle: 'expanded',
            errLogToConsole: true
        }))
        .pipe(gulp.dest('./css/'));
});

gulp.task('default', ['sass'], function() {
    var sassWatcher = gulp.watch('sass/**/*.scss', ['sass']);
});
