var gulp = require("gulp"),
  imagemin = require("gulp-imagemin"),
  del = require("del"),
  usemin = require("gulp-usemin"),
  rev = require("gulp-rev"),
  cssnano = require("gulp-cssnano"),
  uglify = require("gulp-uglify"),
  browserSync = require("browser-sync").create();

gulp.task("previewDist", function () {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "dist",
    },
  });
});

gulp.task("deleteDistFolder", function () {
  return del("./dist");
});

gulp.task("imagemin", function () {
  return gulp
    .src([
      "./app/assets/images/**/*",
      "!./app/assets/images/icons",
      "!./app/assets/images/icons/**/*",
    ])
    .pipe(
      imagemin({
        progressive: true, //for jpeg
        interlaced: true, //for gif
        multipass: true, //for svg
      })
    )
    .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task("usemin", function () {
  return gulp
    .src("./app/index.html")
    .pipe(
      usemin({
        css: [
          function () {
            return rev();
          },
          function () {
            return cssnano();
          },
        ],
        js: [
          function () {
            return rev();
          },
          function () {
            return uglify();
          },
        ],
      })
    )
    .pipe(gulp.dest("./dist"));
});

gulp.task("copyGeneralFiles", function () {
  var pathToCopy = [
    "./app/**/*",
    "!./app/index.html",
    "!./app/css/**",
    "!./app/scripts/**",
    "!./app/temp",
    "!./app/assets/images/**",
    "!./app/assets/scripts/**",
    "!./app/assets/styles/**",
  ];
  return gulp.src(pathToCopy).pipe(gulp.dest("./dist"));
});

gulp.task(
  "build",
  gulp.series(["deleteDistFolder", "imagemin", "usemin", "copyGeneralFiles"])
);
