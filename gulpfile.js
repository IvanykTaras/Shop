var gulp = require('gulp');
var notify = require('gulp-notify');
var sass = require('gulp-sass');

gulp.task("sass", function(){
    return gulp.src(["sass/**/*.sass"])
    .pipe(sass({outputStyle:"expanded"}).on("error", sass.logError))
	.pipe(notify("ALL GOOD!"))
    .pipe(gulp.dest("css"));  
})

gulp.task("watch",function(){
    gulp.watch(["sass/**/*.sass","sass/**/*.scss"],["sass"]);
})