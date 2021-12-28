# Comenzando con animaciones en canvas
<img style="max-width: 100%;" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wallpaperup.com%2Fuploads%2Fwallpapers%2F2013%2F02%2F05%2F35575%2F9ec017d54ecd74c55c44cfad7111f9d6.jpg&f=1&nofb=1" />

## Vamos directo al código

Hay muchas formas de empezar pero yo prefiero hacerlo todo en el mismo archivo, así que en vez de colocar la etiqueta `canvas` y sus atributos directamente en el archivo `.html`, vamos a hacerlo con el archivo de JavaScript `.js`

```javascript
const canvas = document.createElement('canvas')
canvas.width = 400
canvas.height = 400
document.body.appendChild(canvas)
```
No olvides colocar nuestro nodo `canvas` en nuestro documento html haciendo appendChild en el body.
Vamos a asegurarnos de que nuestro canvas funciona obteniendo nuestro pincel (el context del canvas) que es la herramienta que utilizamos para colocar elementos en nuestro canvas, ya sea elementos geométricos o imágenes que es lo que usaremos en esta ocasión.

```javascript
const canvas = document.createElement('canvas')
canvas.width = 400
canvas.height = 400
document.body.appendChild(canvas)
// agregamos un cuadrado negro para saber que todo está funcionando
const ctx = canvas.getContext("2d");
ctx.fillRect(0,0,400,400)
```

## Estructura básica para trabajar con animaciones

La manera más simple que encuentro para mantener mis animaciones en orden y que me permita controlar una gran cantidad de elementos dentro de mi canvas es pensar en "hooks" es decir, un par de funciones que se ejecutan en determinados puntos del ciclo de vida de mi programa y aunque este método no es exactamente una implementación completa de esta arquitectura, podemos imaginar estas siguientes funciones como pequeñas etapas de nuestro programa. Podemos pensar en 3 funciones "hooks" que serán las etapas de nuestro programa: `onStart` <= esta función es la encargada de "encender" nuestro programa que para lograr animaciones quedara "corriendo" por decirlo de alguna manera, en realidad debemos encender un bucle infinito para poder dibujar los fotográmas de nuestras animaciones. `onUpdate` <= será nuestro hook más importante, pues es la función que será llamada una y otra vez para refrescar la animación. Por último `onStop` que será llamada para detener la animación y el ciclo lo que detiene las llamadas a `onUpdate`.

```javascript
const onUpdate = () => {}
const onStart = () => {}
const onStop = () => {}
```
Es hora de imaginarnos una pequeña animación para que podamos explorar qué método usaremos para crear el ciclo infinito.
Vamos a agregar esta pequeña función para agregar un color aleatorio y usarlo para dibujar el relleno de nuestro cuadrado:
```javascript
const canvas = document.createElement('canvas')
canvas.width = 400
canvas.height = 400
document.body.appendChild(canvas)

// vamos a generar un color hexadecimal aleatorio
const randomColor = () => `#${Math.floor(Math.random()*0xFFFFFF).toString(16)}`

const ctx = canvas.getContext("2d");
ctx.fillStyle = randomColor() // <= lo usamos para el relleno del cuadrado
ctx.fillRect(0,0,400,400)
```
Ahora que tenemos una utilidad para generar un color automáticamente, vamos a encender nuestro programa creando un ciclo con `setInterval`

```javascript
const onUpdate = () => {
  ctx.fillStyle = randomColor()
  ctx.fillRect(0,0,400,400)
}
const onStart = () => {
  setInterval(onUpdate,500)
}
```
Lo que estamos haciendo aquí es crear un intervalo que se repite cada medio segundo (500ms) aqui podemos decidir la velocidad de nuestros fotogramas, lo más usual es usar 60 cuadros por segundo, cómo seguro lo has escuchado mencionar para videojuegos o en edición de video, esto lo podemos lograr con `setInterval(onUpdate,1000/60)` pero en el caso nuestra animación cuidado con los ataques epilépticos (muchos colores, muy rápido), podemos guardar este intervalo en una variable `interval = setInterval(onUpdate,1000/6)` para luego detenerlo fácilmente dentro de `onStop` con `clearInterval(interval)` pero a pesar de que a mi me gusta este método para crear el ciclo de la animación, este no es el mejor pues podemos consumir muchos recursos del navegador y si no tenemos cuidado podemos dejar encendidos uno o varios ciclos que perjudicarían el "performance" de nuestro programa, por eso, la mejor forma de crear un ciclo de animación es "solicitarlo" al navegador, es decir, usando el método `requestAnimationFrame` que vive en nuestro objeto global `window` de esta forma le notificamos al navegador que queremos actualizar nuestra animación, pero con la diferencia de que es el navegador quien decide si este update es proporcionado o no, o si tal vez debería ser interrumpido, usando esta herramienta le permitimos al navegador por ejemplo cuando cambiamos de pestaña y en realidad NO estamos mirando nuestra animación, el navegador puede suspender el "refresh" de nuestra animación optimizando de esta manera sus recursos. 

Podemos usar esta herramienta de la siguiente manera:

```javascript
const onUpdate = () => {
  ctx.fillStyle = randomColor()
  ctx.fillRect(0,0,400,400)
  window.requestAnimationFrame(onUpdate)
}
const onStart = () => {
  onUpdate()
}
``` 
como puedes darte cuenta, es importante crear recursividad, es decir, la función `onUpdate` debe hacer una llamada a sí misma por medio de `requestAnimationFrame` para poder crear un ciclo de llamadas, esta forma de crear el ciclo de animación no es mi favorita personal, pero no importa, es la más segura.

Hasta ahora nuestro programa se ve así:
```javascript
const canvas = document.createElement('canvas')
canvas.width = 400
canvas.height = 400
document.body.appendChild(canvas)

const randomColor = () => `#${Math.floor(Math.random()*0xFFFFFF).toString(16)}`
let myReq

const ctx = canvas.getContext("2d");
ctx.fillStyle = randomColor()
ctx.fillRect(0,0,400,400)

const onUpdate = () => {
  ctx.fillStyle = randomColor()
  ctx.fillRect(0,0,400,400)
  myReq = window.requestAnimationFrame(onUpdate)
}
const onStart = () => {
  onUpdate()
}
const onStop = () => {
  window.cancelAnimationFrame(myReq)
}

onStart()
```
Hay que iniciar nuestro programa con `onStart` y es importante que nuestra función `onStop` pueda eliminar el ciclo de animación, por ello lo hemos guardado en una variable `myReq`.

## Lo tenemos todo para trabajar

Ahora que tenemos la estructura minima en nuestro programa junto con nuestros "hooks" que si los observas bien y te gustan los videojuegos, se parecen mucho a los que encontraríamos en los scripts de programas como `Unity` o `UnrealEngine`.

Vamos a crear una animación simple que escuche un evento del `DOM` en este caso el `mousemove` y vamos a cambiar el color de nuestro cuadrado cuando el mouse cambie de posición.

Para ello vamos a colocar un observador de JavaScript que observará o escuchará el movimiento del mouse y nos entregará su posición en cada movimiento, por ahora sólo nos interesa la posición en x

```javascript
// listeners
document.onmousemove = event => ctx.fillStyle = colorFromMousePosition(event.clientX)
```
Nuestro código hasta ahora queda así:
<iframe height="300" style="width: 100%;" scrolling="no" title="How to Ensamble a game" src="https://codepen.io/hectorbliss/embed/MQeOrp?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/hectorbliss/pen/MQeOrp">
  How to Ensamble a game</a> by Héctor (<a href="https://codepen.io/hectorbliss">@hectorbliss</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Es suficiente para empezar con animaciones en canvas

A partir de aquí ya podemos construir animaciones un poco más complejas o incluso un mini juego, espera la siguiente entrada para continuar aprendiendo, de igual forma si practicas lo aprendido hasta ahora y experimentas por tu cuenta con más funciones y observadores, tu creatividad es el límite.

Happy Coding! ❤ Héctorbliss

# Recursos útiles =>

*  [Qué es HTML](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics)

*  [Qué es CSS](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/CSS_basics)

*  [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

*  [Wiki](https://es.wikipedia.org/wiki/Canvas_(HTML))
* [Aprende a programar](https://fixter.camp/courses)