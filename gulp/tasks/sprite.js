var gulp = require('gulp'),
    rename = require('gulp-rename'),
    del = require('del'),
    svgSprite = require('gulp-svg-sprite');

var config = {
    mode : {
        css : {
            sprite : 'sprite.svg',
            render : {
                css : {
                    template : "./gulp/templates/sprite.css"
                }
            }
        }
    }
};

gulp.task('beginClean', function(){
   return del(['./app/temp/sprite', './app/assets/images/sprite']); 
});

gulp.task('createSprite', function(){
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySpriteCSS', function(){
    return gulp.src('./app/temp/sprite/css/**/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('copySpriteGraphics', function(){
    return gulp.src('./app/temp/sprite/css/**/*.svg')
        .pipe(gulp.dest('./app/assets/images/sprite'));
});

gulp.task('endClean', function(){
    return del(['./app/temp/sprite']);
});

gulp.task('generateIcons', gulp.series(['beginClean', 'createSprite', 'copySpriteCSS', 'copySpriteGraphics', 'endClean']));