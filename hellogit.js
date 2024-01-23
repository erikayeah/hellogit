console.log('Ahora estoy editando el fichero');
console.log('Que tal el curso?');

//* indicar que quiero inicializar un contexto de version de controles aqui.
//* En terminal:

/* git init = inicia el proyecto

git status = ver que esta pasando con los ficheros

git add = añadir los ficheros para ser fotografiados. Area Stage

git commit -m 'comentario' = lanzar la fotografia del codigo.

//* Ver si la foto se hizo 
//* = git log || git log --graph || git log --graph --pretty=oneline || etc
salgo con tecla q

git checkout = para volver atras los cambios antes de hacer hacer un commit. 

git checkout + hash del cambio = volver a esa fotografia del proyecto entero.

depende el hash que ponga, voy para atras o adelante AAHH. El checkout para moverme entre hash.

git reset  = volver a la ultima fotografia del fichero.

//* Podemos crear nuestros propios alias


git config --global alias.graph 'git log --graph'


//* Comparar diferencias entre ficheros con cambios y su version anterior

git diff

=> Esto es lo que se ve:

--- a/hellogit2.js = --- es que algo desaparecio
+++ b/hellogit2.js = +++ es que algo aparecio
@@ -1 +1 @@ = desaparece una linea  y aparece una linea nueva.
-console.log('Hello git 2'); = Detalle de lo desaparecido
\ No newline at end of file
+console.log('New hello git'); = Detalle de lo agregado
\ No newline at end of file




*/

//! Ver ficheros y carpetas ocultos con command + shift + . 

