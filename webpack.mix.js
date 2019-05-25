const mix = require('laravel-mix');
const LiveReloadPlugin = require('webpack-livereload-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/App.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        postCss: [require('postcss-css-variables')()],
        processCssUrls: false
    })
    .webpackConfig({
        plugins: [new LiveReloadPlugin()]
    });
// mix.browserSync('http://localhost:3000')
