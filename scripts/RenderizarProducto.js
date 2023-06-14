export function RenderizarProducto(listaProductos) {
  const content_component = document.createElement('div')
  content_component.className = 'content__component'
  for (const producto of listaProductos) {
    console.log(producto)
    const div = document.createElement('div')
    div.className = 'producto'
    div.innerHTML = `<img src=${producto.img} alt=imagen de ${producto.nombre}>`
    div.innerHTML += `<h3>${producto.nombre}</h3>`
    div.innerHTML += `<p>$${producto.precio}</p>`
    content_component.append(div)
  }
  const main_content = document
    .querySelector('#content')
    .appendChild(content_component)
}

export default RenderizarProducto
