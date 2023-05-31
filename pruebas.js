const producto1 = {
  nombre: 'producto 1',
  precio: 200,
}

const producto2 = {
  nombre: 'producto 2',
  precio: 200,
}
const producto3 = {
  nombre: 'producto 3',
  precio: 200,
}

const listaProductos = [producto1, producto2, producto3]

console.log(listaProductos[2])
const productoSeleccionado = prompt()
const product = listaProductos.map(producto => {
  ;`Nombre: ${producto.nombre}\n${producto.precio}`
})
console.log(product)
