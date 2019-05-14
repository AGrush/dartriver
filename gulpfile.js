const gulp = require("gulp"),
  imagemin = require("gulp-imagemin"),
  imageminMozjpeg = require("imagemin-mozjpeg"),
  imageminJpegRecompress = require("imagemin-jpeg-recompress"),
  imageminPngquant = require("imagemin-pngquant"),
  concat = require("gulp-concat"),
  minifyCss = require("gulp-minify-css"),
  autoprefixer = require("gulp-autoprefixer"),
  sass = require("gulp-sass"),
  rename = require("gulp-rename"),
  gutil = require("gulp-util"),
  terser = require("gulp-terser");

/*
--TOP LEVEL FUCNTIONS--
gulp.task - Define tasks
gulp.src - Point to files to use
gulp.dest - Point to output folder
gulp.watch - Watch files & folders for changes
*/

//Move folders
gulp.task("folders", function() {
  gulp
    .src([
      //'src/libs/**',
      //'src/fonts/**',
      "src/assets/webfonts/**"
    ])
    .pipe(gulp.dest("dist/assets/webfonts"));
});

//Move HTML files
gulp.task("html", function() {
  gulp.src("src/*.html").pipe(gulp.dest("dist"));
});

//OPTIMISE IMAGES
//npm install --save-dev gulp-imagemin

// gulp.task('imageMin', () =>
//   gulp.src('src/images/*')
//   .pipe(imagemin())
//   .pipe(gulp.dest('dist/images'))
//   )

// gulp.task('imageMin', function () {
//   return gulp.src('src/images/*')
//       .pipe(imagemin({
//           progressive: true,
//           use: [pngquant()]
//       }))
//       .pipe(gulp.dest('dist/images'));
// });

//OPTIMISE IMAGES 2
//npm install -D imagemin-pngquant imagemin-jpeg-recompress
gulp.task("imagemin", function() {
  return gulp
    .src("src/assets/img/*")
    .pipe(
      imagemin([
        //png files lossy
        imageminPngquant({
          speed: 8, //1 bruteforce => 11 fastest
          quality: [0.9, 1] //lossy settings 0-1 if too low wont save
        })

        // //jpg lossless
        // imagemin.jpegtran({
        //     progressive: true
        // }),

        // jpeg light lossy 1
        // imageminJpegRecompress({
        //     loops: 6,
        //     min: 50,
        //     max: 60,
        //     quality: "low"
        // })

        //jpg light lossy 2
        // imageminMozjpeg({
        //   quality: 50
        // })
      ])
    )
    .pipe(gulp.dest("dist/assets/img"));
});

//Concatenate JS files together (done in minify pipe)
//npm install --save-dev gulp-concat
// gulp.task('concatjs', function(){
//   gulp.src('src/js/*.js')
//     .pipe(concat('main.js'))
//     .pipe(gulp.dest('dist/js'))
// })

//Concatenate JS files & Minify JS
//npm install --save-dev gulp-uglify
gulp.task("uglify", function() {
  gulp
    .src("src/assets/js/*.js")
    //.pipe(concat("main.js"))
    //.pipe(gulp.dest("dist/src/js"))
    //.pipe(concat("main.min.js"))
    // .pipe(babel({
    //     presets: ['es2015']
    // }))
    .pipe(terser())
    // .on('error', function (err) {
    //     gutil.log(gutil.colors.red('[Error]'), err.toString());
    // })
    .pipe(gulp.dest("dist/assets/js"));
});

// Compile Sass to css and place it in dist and local folders along with minified version
//npm install --save-dev gulp-sass gulp-concat gulp-autoprefixer
gulp.task("sass", function() {
  return (
    gulp
      .src("src/assets/scss/*.scss")
      .pipe(
        sass({
          "sourcemap=none": true
        })
      )
      .pipe(concat("main.css"))
      .pipe(autoprefixer("last 2 version", "ie 9"))
      .pipe(gulp.dest("src/assets/css/"))

      // .pipe(rename({
      //     suffix: ".min"
      // }))

      .pipe(
        minifyCss({
          compatibility: "ie8"
        })
      )
      .pipe(gulp.dest("dist/assets/css"))
  );
});

// Catch JS errors
// npm install jshint gulp-jshint jshint-stylish --save-dev
// gulp.task("jshint", function() {
//   return gulp
//     .src("src/js/*.js")
//     .pipe(jshint())
//     .pipe(jshint.reporter("jshint-stylish"));
// });

// Watch for changes in scss & html & other files
// Watch for errors in js file
gulp.task("watch", function() {
  gulp.watch("src/assets/scss/**/*.scss", ["sass"]);
  gulp.watch("src/*.html", ["html"]);
  gulp.watch("src/assets/js/*.js", ["uglify"]);
  // gulp.watch("src/assetsjs/*.js", ["uglify"]);
});

// All tasks together
gulp.task("default", ["folders", "html", "sass", "uglify"]);//, "imagemin"
