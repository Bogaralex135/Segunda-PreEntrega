export function elegirProducto(productos) {
  let salida = ``
  for (let i = 0; i < productos.length; i++) {
    salida += `${i + 1}) ${productos[i].nombre}\n`
    salida += `$${productos[i].precio}\n\n`
  }
  let productoElegido = null
  do {
    const productoElegido = parseInt(
      prompt(`Empiece eligiendo su ${productos[0].categoria}: \n\n${salida}`)
    )
    return productos[productoElegido - 1]
  } while (
    productoElegido <= 0 ||
    productoElegido > 6 ||
    productoElegido === null
  )
}

export default elegirProducto

//TODO: Intentar el for con map
