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
