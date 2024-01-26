indicar que quiero inicializar un contexto de version de controles aqui.
En terminal:

git init = inicia el proyecto

git status = ver que esta pasando con los ficheros

git add = añadir los ficheros para ser fotografiados. Area Stage

git commit -m 'comentario' = lanzar la fotografia del codigo.

Ver si la foto se hizo 
= git log || git log --graph || git log --graph --pretty=oneline || etc
salgo con tecla q

git checkout => Para desplazarnos entre commits ((CREO que es el nuevo head, creo))

git checkout + hash del cambio = volver a esa fotografia del proyecto entero.

!! depende el hash que ponga, voy para atras o adelante AAHH. El checkout para moverme entre hash. Cuidado de guardar el ultimo hash q dsp de esto en el log no sale, pero si esta en el historial de temrinal.

git reset  = volver a la ultima fotografia del fichero.

Podemos crear nuestros propios alias


git config --global alias.graph 'git log --graph --oneline'


Comparar diferencias entre ficheros con cambios y su version anterior

git diff

=> Esto es lo que se ve:

--- a/hellogit2.js = --- es que algo desaparecio
+++ b/hellogit2.js = +++ es que algo aparecio
@@ -1 +1 @@ = desaparece una linea  y aparece una linea nueva.
-console.log('Hello git 2'); = Detalle de lo desaparecido
\ No newline at end of file
+console.log('New hello git'); = Detalle de lo agregado
\ No newline at end of file


git reflog
Para ver todas las interacciones que hicimos, incluso de cosas reseteadas o eliminadas. 


git tag nombre_elegido => Como guardar una partida hasta este punto, es la referencia.

git checkout tag/clase_1

! Ver ficheros y carpetas ocultos con command + shift + .

RAMAS RAMAS RAMAS RAMAS

git branch nombre_rama

git switch nombre_rama

COMO REFLEJAR DATOS DE UNA RAMA EN MI RAMA

git merge main (traer de la rama main)


git stash => Guarda temporalmente en local algo, sin comitearlo, para q sigas trabajando dsp de volver a la rama. Cuando tengas q slair de urgencia y no queres comitear trabajo no terminado.

git stash list => Para ver los pendientes

git stash pop => Traeme lo guardado para seguir trabajando.

git stash drop => Me devuelve al estado inicial del stash si lo que cambie no me gusta.


TAMBIEN PARA VER CONFLICTOS Y COMPARAR RAMAS
git diff nombreRama


ELIMINAR RAMAS QUE YA NO SE VAN A TOCAR. Ramas representan trabajos temporales.

git branch -d nombreRama

VER TODOS LOS MOVIMIENTOS
Eliminar en log principales y flujo del proyecto, pero sigue estando. Esscrito a fuego digamos, y para verlas, necesito 

git reflog 

SUBIR A GITHUB

…or create a new repository on the command line
echo "# hellogit" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/erikayeah/hellogit.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/erikayeah/hellogit.git
git branch -M main
git push -u origin main



git pull => Descarga y fusiona automáticamente los cambios del repositorio remoto en tu rama local.

git fetch => Descarga los cambios del repositorio remoto a tu repositorio local sin fusionar automáticamente los cambios en tu rama local.