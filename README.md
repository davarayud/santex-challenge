# santex-challenge

## creo un docker con mysql para cargar la base de datos

configuro un proyecto node para la api del backend
utilizo las siguientes dependencias:
express: para manejar las conexiones http
sequelize: como orm para la conexión con la base de datos mysql
dotenv: para mantener las variables de entorno seguras y fuera de git
nodemon: para actualizar las modificaciones en el servidor corriendo
bcrypt: para encriptar password en la base de datos
jwt: para token de autenticación que luego se leerán con un middleware
json-2-csv: para enviar csv de los jugadores
express-validator: para las validaciones de los inputs
cors: para poder integrar con frontend

## Frontend realizado con angular siguiendo las vistas pedidas.

en el cual se puede:
Crear usuario
Ingresar con usuario y contraseña
Ver jugadores filtrando por diferentes opciones
Descargar CSV con el listado filtrado
Ver jugador individual
Editar jugador
Crear Jugador nuevo

## Puntos que faltaron por hacer:

Manejo de errores con códigos y mensajes correctos
Botón de Logout
Colección postman, en su lugar están subidos los archivos .rest que use para el testing del backend

# Para levantar el proyecto se deben seguir los siguientes pasos

## Base de datos

### Creamos docker con mysql

$ docker run --name mysql-challenge -e MYSQL_ROOT_PASSWORD=root -e MYSQL_USER=usuario -e MYSQL_PASSWORD=123456 -d -p 3306:3306 -v mysql_challenge:/var/lib/mysql mysql:latest

### Cargamos datos de jugadores

$ cd Archivos\ CSV\ y\ SQL/

$ docker exec -i mysql-challenge sh -c 'exec mysql -uroot -proot' < create_database.sql

$ docker exec -i mysql-challenge sh -c 'exec mysql -uroot -proot fifa_local' < fifa_male_players.sql

$ cd ..

## API Backend

### Ingresamos a la carpeta e instalo dependencias

$ cd fifa-api
$ npm install

### Para correr en modo desarrollo con nodemon

$npm run dev

### Para correr en modo producción

$npm run start

## Frontend Angular

### En otra consola nos dirigimos a la carpeta del front

$ cd fifa-front

### Lo corremos con

$ ng serve

## Configuraciones posibles:

### si desea modificar alguno de los siguientes valores en el backend puede crear un archivo .env y dar los valores de entorno:

#### PORT=3003

#### BASE_DE_DATOS='fifa_local'

#### USUARIO_DB='root'

#### PASSWORD_USUARIO_DB='root'

#### HOST_DB='localhost'

#### SECRET_JWT='Palabra secreta'
