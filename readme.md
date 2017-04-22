# Static Site Build
<br />

## Start Developing
I'm using npm scripts to compile the assets and run a server for local development.
Here is the 2 most important commands to use while developing:

#### Watch<br />
Spools up a local server and begins watching your files for changes<br />
Scripts included with this command: clean, build, and serve.
```
npm run watch
```

#### Build<br />
Compile your assets into the public folder.
Scripts included with this command: build:img, build:css, and build:js.
```
npm run build
```
If a directory is missing in the public folder, run the build command (`npm run build`) before ``` npm run watch ```
<br />

#### Check out the package.json "scripts" for other commands available

## Build Dependencies
### HTML
- <a href="https://github.com/mozilla/nunjucks">Nunjucks</a>

### Images
- <a href="https://github.com/paulcpederson/imagemin-newer">Imagemin-newer</a>

### CSS
- <a href="https://github.com/sass/node-sass">Node Sass</a>
- <a href="https://github.com/postcss/postcss">PostCSS</a>
    - <a href="https://github.com/postcss/autoprefixer">Autoprefixer</a>
    - <a href="https://github.com/ben-eb/cssnano">CSSNano</a> (minify the css)

### JS
- <a href="https://babeljs.io/">Babel</a>
    - <a href="https://github.com/babel/babel/tree/master/packages/babel-core">babel-core</a>
    - <a href="https://github.com/babel/babelify">babelify</a> (babel plugin for browserify)
    - <a href="https://github.com/babel/babel/tree/master/packages/babel-preset-es2015">babel-preset-es2015</a>
- <a href="https://github.com/substack/node-browserify">Browserify</a>
- <a href="https://github.com/mishoo/UglifyJS2">Uglify-js</a>

### Build
- <a href="https://github.com/tapio/live-server">Live-server</a>
- <a href="https://github.com/Qard/onchange">Onchange</a>
- <a href="https://github.com/mysticatea/npm-run-all">npm-run-all</a> (run all your commands sequentially or in parallel)


#### Notes
You can add a custom development url/host by adding a host flag to the "serve" script<br />
```
"serve": "live-server public/ --host mycoolsite.com --port='3000'"
```
