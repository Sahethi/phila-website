var gulp = require("gulp"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"), 
    cssvars = require("postcss-simple-vars"),
    nested = require("postcss-nested"),
    cssImport = require("postcss-import"),
    mixins = require("postcss-mixins"),
    hexrgba = require("postcss-hexrgba");
    
gulp.task("css", function(){
    return gulp.src("./app/assets/styles/style.css")
        .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
        .pipe(gulp.dest("./app/css/"));
});
