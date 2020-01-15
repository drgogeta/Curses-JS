# ReactJs

## ¿Que es ReactJS?
*React* es una loibreria desarrollada por Fecebook, que sirve para el desarrollo de aplicasiones en multiples plataformas.

Cada pequeña parte de nuestro aplicativo lo podremos considerar un componente, el cual se podra reutilizar.

## Virtual DOM
Es una herramineta que utiliza React y Vue para mejorar el performance de las apps, el cual consiste en tener una copia exacta del **DOM** pero mas ligera, en la cual podremos realizar diferentes operaciones.

Los cambios que hagamos en el **virtual DOM** no afecta al **DOM** pero si deben estar sincronizados constantemente, esto es una tarea que hace **React DOM**.

## Tipos de comoponentes
* Statefull components: Son componentes que resiven un estado para ser utilizados.
* Stateless components: Son componentes ajenos a un estado y los cuales se encargan de pequeñas porciones de lojica
* presentation components: Son componentes visuales que retontan el jsx.

## JSX
Es una sintacsis que nos permite escribir codigo HTML dentro de un archivo JavaScript, 
dejando la capa de presentacion y de lojica en un mismo lugar.

## Props
Es una alternativa manera de comunicar los componetes con el resto del aplicativo. Los props son una forma de enviar y recibir informacion en nuestro componente. 

## Ciclo de Vida

### ¿Cual es el ciclo de vida de un aplicativo en ReactJs?
Todos los componentes en **React** pasa por una serie de metodos, a los cuales deniminaremos como **Ciclo de vida de un componente**, en algunos casos no se evidencia en un bloque de codigo y en otros podemos invocarlos desde nuestro componete.

Los componentes en react hacen un proceso de: 
1. #### Montaje
    En esta fase el componete se crea con su lojica, componentes hijos. Para despues montarse en el **DOM**.
* #### constructor
    Este es el primer metodo o funcion que se ejecuta cuando se invoca al componente, usualmente se utiliza para iniciar los contyroladores, eventos del estado.
* #### getDerivedStateFromProps()
    Este metodo se llama antes de genrar su representacion en el **DOM** y podremos actualizar su estado por algun cambio. Es un metodo el cual se debe de tener cuidado en su implementacion puesto que puede generar errores su implementacion
* #### render()
    Es donde se escribe los elementos que queremos representar el **DOM**.
* #### ComponentDidMount()
    Este metodo se invoca una vez que se halla construido el **DOM**, en esta session trabajareos con la interasion de nuestro componente.             
2. #### Actualización
    En esta fase el componente valida los cambios cambios que puedan ocurrir dentros de su state y props, ya que estos pueden hacer que mute. 
* #### getDerivedStateFromProps()
    Este metodo es el primero en ejecutarce en la fase de actualizacion.
* #### render()
    Se llama al metodo render que representa un cambio en el **DOM**.
* #### componentDidUpdate()
    Se invoca una vez que el componente se actulice y reciba sus argumentos, aca prodemos manipular el componente.
3. #### Desmontaje 
    En esta etapa el componente ya termina su ciclo. Se usa habitualmente para eliminar la representacion que tiene el **DOM**.
* #### componentWillUnmount()
    Se llama antes de que el componente se destruido.
4. #### Menejo de errore: 
    Cuando el componente se ejecuta y este tiene algun error, se puede evidenciar de una manera mas clara cuales han sido sus errores.
* ##### getDerivedStateFromError()
    Una vez que se lanza un error este es el primer método que se llama, el cual recibe el error como argumento y cualquier valor devuelto en este método es utilizado para actualizar el estado del componente.
* #### componentDidCatch()
    Este método es llamado después de lanzarse un error y pasa como argumento el error y la información representada sobre el error.

## Arquitectura basada en componentes React 


## React Hooks: useEffect y useState

Los React Hooks son una característica de React que tenemos disponible a partir de la versión 16.8. Nos permiten agregar estado y ciclo de vida a nuestros componentes creados como funciones.

El Hook useState nos devuelve un array con dos elementos: la primera posición es el valor de nuestro estado, la segunda es una función que nos permite actualizar ese valor.

El argumento que enviamos a esta función es el valor por defecto de nuestro estado (initial state).

El Hook useEffect nos permite ejecutar código cuando se monta, desmonta o actualiza nuestro componente.

El primer argumento que le enviamos a useEffect es una función que se ejecutará cuando React monte o actualice el componente. Esta función puede devolver otra función que se ejecutará cuando el componente se desmonte.

El segundo argumento es un array donde podemos especificar qué propiedades deben cambiar para que React vuelva a llamar nuestro código. Si el componente actualiza pero estas props no cambian, la función no se ejecutará.

Por defecto, cuando no enviamos un segundo argumento, React ejecutará la función de useEffect cada vez que el componente o sus componentes padres actualicen. En cambio, si enviamos un array vacío, esta función solo se ejecutará al montar o desmontar el componente.


Custom Hooks

React nos permite crear nuestros propios Hooks. Solo debemos seguir algunas convenciones:

    Los hooks siempre deben empezar con la palabra use: useAPI, useMovies, useWhatever.
    Si nuestro custom hook nos permite consumir/interactuar con dos elementos (por ejemplo, title y setTitle), nuestro hook debe devolver un array.
    Si nuestro custom hook nos permite consumir/interactuar con tres o más elementos (por ejemplo, name, setName, lastName, setLastName, etc.), nuestro hook debe devolver un objeto.

## React Router



## REDUX

Nace de la arquitectura **FLUX**, tomando como base el lenguaje funcional **ELM** creado por *Dan Abramov y Andrew Clark*, es de las libreria mas usadas para el manejo de flujos de informacion.

Redux nace bajo la necesidad de *¿como se podria manejar el estado dentro de un aplicativo JavaScript?*, ya que el estado un aplicativo puede variar apartir de las interacciones del uaurio o los llamados a las API. Con lo anterior descrito podemos intuir que Redux crea un estado y se encarga de predecir las mutaciones que el mismo pueda tener.

Redux tiene pasos

* ### Actions: Son aquellas que llaman a los Reducers enviando como parametros la accion del usuario.
* ### Reducxer: Son funciones puras las cuales taman el estado anterior y con una accion devuelven un nuevo estado con los cambios solicitados.
* ### Store: Es la fuente de la verdad de nuestro aplicativo y es de solo lectura.

En el siguiente esquema se puede ver el ciclo de Redux

![alt text](https://miro.medium.com/proxy/1*EdiFUfbTNmk_IxFDNqokqg.png)
 
