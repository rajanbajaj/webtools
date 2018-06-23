var gulp = require('gulp');
var autoprefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');

gulp.task('browserSync', function() {
   browserSync.init({
      server: {
         baseDir: 'build/'
      },
   })
   gulp.watch("**/*.html").on("change", reload);
});

gulp.task('styles', function() {
   
   gulp.src(['src/styles/**/*.css'])
   .pipe(concat('style.css'))
   .pipe(autoprefix('last 2 versions'))
   .pipe(minify())
   .pipe(gulp.dest('build/styles/'))
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

gulp.task('default', ['browserSync', 'styles', 'js', 'imagemin' ], function (){
   gulp.watch('src/styles/**/*.css', ['styles']);
   gulp.watch('src/scripts/**/*.js', ['js']);
});  
