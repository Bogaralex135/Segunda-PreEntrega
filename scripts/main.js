import { elegirProducto } from './opcionProducto.js'
import { carrito } from './carrito.js'
import { descuentos } from './descuentos.js'
import { generarTicket } from './generarTicket.js'
import { procesadores } from './Componentes/CPU.js'
import { disipadores } from './Componentes/Dissipators.js'
import { tarjetasMadre } from './Componentes/MotherBoard.js'
import { memoriasRam } from './Componentes/RAM.js'
import { discos } from './Componentes/HDD.js'
import { tarjetasGraficas } from './Componentes/GPU.js'
import { gabinetes } from './Componentes/Case.js'
import { fuentesDePoder } from './Componentes/PowerSupply.js'

alert(
  '¡Bienvenido a Gaming Innovate!\n\n¡Prepárate para la mejor experiencia de juego!\n\nEncuentra todo lo que necesitas para armar tu propia computadora de gaming en Gaming Innovate.'
)

const procesador = elegirProducto(procesadores)
const disipador = elegirProducto(disipadores)
const tarjetaMadre = elegirProducto(tarjetasMadre)
const memoriaRam = elegirProducto(memoriasRam)
const disco = elegirProducto(discos)
const tarjetaGrafica = elegirProducto(tarjetasGraficas)
const gabinete = elegirProducto(gabinetes)
const fuenteDePoder = elegirProducto(fuentesDePoder)

const listaCarrito = carrito(
  procesador,
  disipador,
  tarjetaMadre,
  memoriaRam,
  disco,
  tarjetaGrafica,
  gabinete,
  fuenteDePoder
)

function confirmarCompra(carrito) {
  let mostrar =
    'Esta seguro de comprar estos articulos?\nEscriba SI / NO para continuar.\n\n'
  let subtotal = 0
  carrito.map((producto, index) => {
    subtotal += producto.precio
    mostrar += `${index + 1}) ${producto.nombre} $${producto.precio}\n`
  })
  let total = descuentos(subtotal)
  mostrar += `\nSubtotal: $${subtotal}\n`
  mostrar += `\nTotal: $${total}\n\n`

  const confirmacion = prompt(mostrar).toUpperCase()
  if (confirmacion === 'SI') {
    alert('Gracias por su compra!\n\nSe le ha generado un ticket en su consola')
    generarTicket(carrito, total)
  }
  return false
}

confirmarCompra(listaCarrito)
