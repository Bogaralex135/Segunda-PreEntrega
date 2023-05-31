import { procesadores } from './Componentes/CPU.js'
import { elegirProducto } from './opcionProducto.js'
import { gabinetes } from './Componentes/Case.js'
alert(
  '¡Bienvenido a Gaming Innovate!\n\n¡Prepárate para la mejor experiencia de juego!\n\nEncuentra todo lo que necesitas para armar tu propia computadora de gaming en Gaming Innovate.'
)

const procesador = elegirProducto(procesadores)
const gabinete = elegirProducto(gabinetes)

function carrito(...productosElegidos) {
  const carrito = []
  carrito.push(...productosElegidos)
  console.log(carrito)
}

carrito(procesador, gabinete)
