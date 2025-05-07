var gulp = require('gulp'),
    webpack = require('webpack');

/*
We know that these functions are asynchronous and the normal way to deal with the was to return but there is another way to do so :-
You can simply specify the name of a function in the callback function parenthesis and call that function after your statements, it acts like return.
*/

/*
We also need to mention the webpack.config.js path, this needs to be required right from the root. Hence .. goes outside 'tasks' then .. goes outside 'gulp' and then we pick up webpack.config.js from our phila-website folder
*/
gulp.task('scripts', function(callback){
    webpack(require('../../webpack.config.js'), function(err, stats){
        if(err){
            console.log(err.toString());
        }
        console.log(stats.toString());
        callback();
    });
});