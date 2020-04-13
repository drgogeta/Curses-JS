# Basic concept of Nodes
## Event loop NodeJS
Un proceso con un bucle, que gestiona de forma asincrona todos los eventos.
### Event queue
Son los diferentes eventos que se generan en run time. 
### Thread pool
Aquellos eventos que tienen un tiempo muy demorado en su ejecusion, se mandan a este hilo.
Por cada evento que tenga el *Thread pool* crea un thread por cada evento que tenga.
## Monohilo: ventajas y desventajas
Cuando ocurre algun error en runtime el programa se puede detener.
## Variable de entorno
Se pueden acceder desde el proceso de nuestro programa ***process.env.{NAME_VARIABLE}*** al momenoto de ejecuta nuestro programa podemos pasarle el argumento como 
```
{NAME_VARIABLE} node {URL_PROGRAM}
``` 
## Tools
* Nodemon: es una herramineta que ejecuta nuestro script y cualquier cambio que hagamos sobre el se ejecuta automaticamente.
* 

## Callbacks
Es una menera de maneja la asyncronidad en JavaScript pero, si no se tiene cuidado puede ser un dolor cabeza.
Uno de los errores mas conocidos es el callback hell al momento comenzar a trabajar con callbacks