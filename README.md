## santex-challenge

#creo un docker con mysql para cargar la base de datos

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

#Frontend realizado con angular siguiendo las vistas pedidas.
en el cual se puede:
Crear usuario
Ingresar con usuario y contraseña
Ver jugadores filtrando por diferentes opciones
Descargar CSV con el listado filtrado
Ver jugador individual
Editar jugador
Crear Jugador nuevo

#Puntos que faltaron por hacer:
Manejo de errores con códigos y mensajes correctos
Botón de Logout
Colección postman, en su lugar están subidos los archivos .rest que use para el testing del backend
