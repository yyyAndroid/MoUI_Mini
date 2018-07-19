/**
 * 构建app
 **/

const gulp = require('gulp')
const gulpLoadPlugins = require('gulp-load-plugins')
const browserSync = require('browser-sync')
plManager = gulpLoadPlugins()
const reload = browserSync().reload


/**
 * 文件处理：编译 && 拷贝
 **/
// 编译less
gulp.task('compile-less', () => {
    return gulp.src(['../src/**/*.less'])
        .pipe(plManager.plumber())
        .pipe(plManager.sourcemaps.init())
        .pipe(plManager.cached('compile-less'))
        .pipe(reload({
            stream: true
        }))
        .pipe(plManager.less())
        .pipe(plManager.cleanCss())
        .pipe(plManager.rename((path) => {
            path.extname = '.wxss'
        }))
        .pipe(gulp.dest('../app/'))
})

// 编译jade
gulp.task('compile-jade', () => {
    return gulp.src(['../src/**/*.jade'])
        .pipe(plManager.plumber())
        .pipe(plManager.sourcemaps.init())
        .pipe(plManager.cached('compile-jade'))
        .pipe(reload({
            stream: true
        }))
        .pipe(plManager.jade({
            pretty: true
        }))
        .pipe(plManager.rename((path) => {
            path.extname = '.wxml'
        }))
        .pipe(gulp.dest('../app/'))
})

// 编译json
gulp.task('compile-json', () => {
    return gulp.src(['../src/**/*.json'])
        .pipe(plManager.plumber())
        .pipe(plManager.sourcemaps.init())
        .pipe(plManager.cached('compile-json'))
        .pipe(plManager.jsonminify())
        .pipe(reload({
            stream: true
        }))
        .pipe(gulp.dest('../app/'))

})

// 拷贝文件
gulp.task('copy-file', () => {
    return gulp.src([
            '../src/**/*.js',
            '../src/**/*.wxss',
            '../src/**/*.wxml',
            '../src/**/*.{jpg, jpeg, png, gif}'
        ])
        .pipe(plManager.plumber())
        .pipe(plManager.sourcemaps.init())
        .pipe(plManager.cached('copy-file'))
        .pipe(reload({
            stream: true
        }))
        .pipe(gulp.dest('../app/'))
})

/**
 * 监控（watch）
 **/
gulp.task('watch', () => {
    gulp.watch('../src/**/*.less', ['compile-less'])
    gulp.watch('../src/**/*.jade', ['compile-jade'])
    gulp.watch('../src/**/*.json', ['compile-json'])
    gulp.watch('../src/**/*.js', ['copy-file'])
    gulp.watch('../src/**/*.wxss', ['copy-file'])
    gulp.watch('../src/**/*.wxml', ['copy-file'])
})

/**
 * 启动 gulp task
 **/
gulp.task('default', [
    'compile-less',
    'compile-jade',
    'compile-json',
    'copy-file',
    'watch'
])