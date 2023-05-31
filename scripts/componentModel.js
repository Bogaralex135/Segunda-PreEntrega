class Component {
  constructor(id, nombre, precio) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
  }
}

function ID() {
  let prefijo = ''
  let sequencia = 0
  return {
    set_prefijo: function (p) {
      prefijo = String(p)
    },
    set_sequencia: function (s) {
      sequencia = s
    },
    generarID: function () {
      var result = prefijo + sequencia
      sequencia += 1
      return result
    },
  }
}

export { Component, ID }
