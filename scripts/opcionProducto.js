/**
 * Retorna un producto seleccionado de una lista de productos después de solicitar al usuario que elija uno.
 *
 * @param {array} productos - La lista de productos a elegir.
 * @return {object} El objeto de producto que fue elegido por el usuario.
 */

export function elegirProducto(productos) {
  let salida = ``
  productos.map((producto, index) => {
    salida += `${index + 1}) ${producto.nombre}\n`
    salida += `$${producto.precio}\n\n`
  })
  let productoElegido
  do {
    productoElegido = parseInt(
      prompt(`Empiece eligiendo su ${productos[0].categoria}: \n\n${salida}`)
    )
  } while (
    productoElegido <= 0 ||
    productoElegido > 6 ||
    isNaN(productoElegido)
  )
  return productos[productoElegido - 1]
}

export default elegirProducto
