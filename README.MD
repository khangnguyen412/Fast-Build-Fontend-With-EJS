# Source for fast build template
## Description
- Use for fastbuild html, css, js for wordpress by Ejs file

## Require
- Node >= 16.x
- Gulp

## How to use
- Run the command below:
```
npm install 
```

- Install gulp cli:
```
npm install --global gulp-cli
```

- Install gulp package (don't need run these command after GitClone this, just use for create the source): 
```
npm install --save-dev gulp
npm install --save-dev gulp-sass 
npm install --save-dev sass 
npm install --save-dev gulp-autoprefixer 
npm install --save-dev gulp-clean-css 
npm install --save-dev gulp-uglify 
npm install --save-dev gulp-concat 
npm install --save-dev gulp-imagemin 
npm install --save-dev browser-sync 
npm install --save-dev gulp-htmlmin 
npm install --save-dev gulp-rename
npm install --save-dev gulp gulp-ejs
npm install --save-dev del
```

- Run the command below to use:
```
gulp
```

- View web:
```
http://localhost:3000/
http://localhost:3000/home.html (don't access to: http://localhost:3000/home)
```

- Use import styles, script, images:
    - Import css, script to html use ( ./ ) before the path.
    - Import images in css use ( ../ or ../../ ) before the path.
    - Use ./ for style and script If you are in ./src path.
    - Use ../ the for background-image in style scss If you are in ./src path.
    - Use ../../ the for background-image in style scss If you are in ./src/..
    
The source was set up by KhangNguyen — do not copy
