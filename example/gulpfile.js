var gulp = require('gulp');
var sass = require("gulp-sass");
var autoprefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');
var del = require('del');


gulp.task('browserSync', function() {
   browserSync.init({
      server: {
         baseDir: 'build/'
      },
   })
   gulp.watch("**/*.html").on("change", reload);
});

// gulp.task("sass", function(){
//     gulp.src("src/styles/sass/**/*.scss")
//         .pipe(sass().on("error",sass.logError))
//         .pipe(gulp.dest("src/styles/css/"))
//         .pipe(autoprefix({
//             browsers: ["last 2 versions"],
//             cascade: false
//         }))
//         .pipe(browserSync.stream({match: "**/*.css"}));
// });

gulp.task('styles', function() {
   
   gulp.src("src/styles/sass/**/*.scss")
   .pipe(concat('style.css'))
   .pipe(minify())
   .pipe(sass().on("error",sass.logError))
   .pipe(gulp.dest('build/styles/'))
   .pipe(autoprefix('last 2 versions'))
   .pipe(browserSync.reload({
      stream: true
   }))
});

gulp.task('js', function(){
   gulp.src('src/scripts/**/*.js')
   .pipe(concat('script.js'))
   .pipe(uglify())
   .pipe(gulp.dest('build/scripts/'));
});

gulp.task('imagemin', function() {
   var img_src = 'src/images/**/*', img_dest = 'build/images';
   
   gulp.src(img_src)
   .pipe(changed(img_dest))
   .pipe(imagemin())
   .pipe(gulp.dest(img_dest));
});

// gulp.task('clean:build', function() {
//    return del.sync('build');
// });
// gulp.task('clean:build', function() {
//    //return del.sync('build');
//    return del([
//       'build/images/',
//       'src/styles/css/',
//       // '!src/styles/css/bootstrap.min.css',
//       // instructs to clean temp folder
//       '!build/index.html',
//       // negate to instruct not to clean package.json file

//       'build/scripts/',
//       'build/styles/'
//        ]);
// });

gulp.task('default', [ 'browserSync', 'styles', 'js', 'imagemin' ], function (){
   // gulp.watch('src/styles/**/*.scss', ['styles']);
   gulp.watch('src/styles/**/*.scss', ['styles']);
   gulp.watch('src/scripts/**/*.js', ['js']);
});  
