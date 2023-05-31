import { Component, ID } from '../componentModel.js'

const id = ID()
id.set_prefijo('GI-CPU-')
id.set_sequencia(110)

const procesador1 = new Component(
  id.generarID(),
  'Intel Core i5-11400F',
  160,
  'Procesador'
)
const procesador2 = new Component(
  id.generarID(),
  'AMD Ryzen 5 5600X',
  300,
  'Procesador'
)
const procesador3 = new Component(
  id.generarID(),
  'Intel Core i7-11700K',
  400,
  'Procesador'
)
const procesador4 = new Component(
  id.generarID(),
  'AMD Ryzen 7 5800X',
  450,
  'Procesador'
)
const procesador5 = new Component(
  id.generarID(),
  'Intel Core i9-11900K',
  600,
  'Procesador'
)
const procesador6 = new Component(
  id.generarID(),
  'AMD Ryzen 9 5900X',
  800,
  'Procesador'
)

export const procesadores = [
  procesador1,
  procesador2,
  procesador3,
  procesador4,
  procesador5,
  procesador6,
]
export default procesadores
