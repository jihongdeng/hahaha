let
	gulp = require("gulp")
	htmlmin = require("gulp-htmlmin"),
	cssmin  = require("gulp-clean-css"),
	jsmin   = require("gulp-uglify");

gulp.task("js",function(){
	gulp.src("src/js/*.js")
		.pipe(jsmin())
		.pipe(gulp.dest("dist/js"))
})

gulp.task("default",["js"])