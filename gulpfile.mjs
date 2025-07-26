import gulp from 'gulp';
import sass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import imagemin from 'gulp-imagemin';
import browserSync from 'browser-sync';
import ejs from 'gulp-ejs';
import rename from 'gulp-rename';
import { deleteAsync as del } from 'del';

// Khởi tạo gulp-sass với engine là Dart Sass
const sassCompiler = gulpSass(sass);

function library() {
    return gulp.src(['./src/lib/**/*'])
        .pipe(gulp.dest('./templates/lib'))
        .pipe(browserSync.stream());
}

function getfile() {
    return gulp.src(['./src/views/getfile.php'])
        .pipe(gulp.dest('./templates'));
}

function styles() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sassCompiler().on('error', sassCompiler.logError))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'], cascade: false }))
        .pipe(gulp.dest('./templates/css'))
        .pipe(browserSync.stream());
}

function scripts() {
    return gulp.src('./src/js/**/*.js')
        .pipe(gulp.dest('./templates/js'))
        .pipe(browserSync.stream());
}

function images() {
    return gulp.src('./src/images/**/*', { encoding: false })
        .pipe(imagemin())
        .pipe(gulp.dest('./templates/images'));
}

function views() {
    return gulp.src(['src/views/*.ejs', '!src/views/_*.ejs', '!src/views/layouts/*.ejs', '!src/views/partials/*.ejs', '!src/views/blocks/*.ejs'])
        .pipe(ejs())
        .pipe(rename({ extname: '.html' }))
        .pipe(gulp.dest('./templates'));
};

function watch() {
    browserSync.init({
        server: {
            baseDir: './templates'
        }
    });
    gulp.watch('./src/scss/**/*.scss', styles);
    gulp.watch('./src/js/**/*.js', scripts);
    gulp.watch('./src/images/**/*', images);
    gulp.watch('./src/views/**/*.ejs', views).on('change', browserSync.reload);
}

function clean() {
    return del(['templates/**/*', '!templates/images', '!templates/images/**/*']);
}

const build = gulp.parallel(library, getfile, styles, scripts, images, views);

export default gulp.series(clean, build, watch);