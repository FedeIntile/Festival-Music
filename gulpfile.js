
const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin')


// Función que compila SASS

function css(){
   return src('src/scss/app.scss') // src busca donde esta el archivo scss
            .pipe(sass()) // esta funcion sass lo compila
            .pipe(dest('./build/css')) // crea la carpeta build y dentro una css, y dentro el archivo compilado
}

function minificarcss(){
   return src('src/scss/app.scss')
      .pipe(sass({
         outputStyle: 'compressed'
      }))
      .pipe(dest('./build/css'))
}

function imagenes(){
   return src("src/img/**/*") // los primeros 2 asteriscos lee todas las imagenes y el segundo entra a las carpetas
      .pipe(imagemin())
      .pipe(dest('./build/css'))

}

function watchArchivos(){ //  funcion que escucha los cambios una vez que guardamos
   watch('src/scss/**/*.scss', css); // escucha el archivo en la ubicacion y aplica luego la funcion css
}  // para detener watch podemos eliminar el terminal o apretar Ctrl+C


exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;


