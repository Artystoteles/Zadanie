const browserSync = require("browser-sync");
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browser = require("browser-sync").create();

function style() {
  return gulp
    .src("./*.scss")
    .pipe(sass())
    .pipe(gulp.dest("."))
    .pipe(browser.stream());
}

function watch() {
  browser.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./*.scss", style);
  gulp.watch("./*.html").on("change", browser.reload);
  gulp.watch("./*.js").on("change", browser.reload);
}

exports.style = style;
exports.watch = watch;
