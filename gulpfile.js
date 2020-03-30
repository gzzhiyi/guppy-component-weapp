const { series, src, dest } = require('gulp');
const gulpClean = require('gulp-clean');

function clean() {
  return src('./dist/*')
    .pipe(gulpClean());
}

function copyComponent() {
  return src('./miniprogram/components/**/*')
    .pipe(dest('./dist/'));
}

function defaultTask(cb) {
  cb();
}

exports.default = defaultTask
exports.build = series(clean, copyComponent)
