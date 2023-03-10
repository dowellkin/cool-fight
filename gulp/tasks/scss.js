import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";

import cleanCss from "gulp-clean-css"; // Compress CSS files
import webpcss from "gulp-webpcss"; // Output WEBP images
import autoprefixer from "gulp-autoprefixer"; // Adding vendor prefixes
import groupCssMediaQueries from "gulp-group-css-media-queries"; // Group all media queries

const sass = gulpSass(dartSass);

export const scss = () => {
  return (
    app.gulp
      .src(app.path.src.scss, { sourcemaps: true })
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>"
          })
        )
      )
      .pipe(app.plugins.replace(/@img\//g, "../img/"))
      .pipe(
        sass({
          outputStyle: "expanded"
        })
      )
      .pipe(groupCssMediaQueries())
      .pipe(
        webpcss({
          webpClass: ".webp",
          noWebpClass: ".no-webp"
        })
      )
      .pipe(
        autoprefixer({
          grid: true,
          overrideBrowserlist: ["last 3 versions"],
          cascade: true
        })
      )
      // Uncomment if you need not compressed style file
      // .pipe(app.gulp.dest(app.path.build.css))
      .pipe(cleanCss())
      .pipe(
        rename({
          extname: ".min.css"
        })
      )
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browserSync.stream())
  );
};
