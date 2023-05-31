import { Component, ID } from '../componentModel.js'

const id = ID()
id.set_prefijo('GI-GPU-')
id.set_sequencia(660)

const tarjetaGrafica1 = new Component(
  id.generarID(),
  'NVIDIA GeForce RTX 3080',
  700,
  'GPU'
)
const tarjetaGrafica2 = new Component(
  id.generarID(),
  'AMD Radeon RX 6800 XT',
  650,
  'GPU'
)
const tarjetaGrafica3 = new Component(
  id.generarID(),
  'NVIDIA GeForce RTX 3070',
  500,
  'GPU'
)
const tarjetaGrafica4 = new Component(
  id.generarID(),
  'AMD Radeon RX 5700 XT',
  400,
  'GPU'
)
const tarjetaGrafica5 = new Component(
  id.generarID(),
  'NVIDIA GeForce GTX 1660 Super',
  250,
  'GPU'
)
const tarjetaGrafica6 = new Component(
  id.generarID(),
  'AMD Radeon RX 5500 XT',
  200,
  'GPU'
)

export const tarjetasGraficas = [
  tarjetaGrafica1,
  tarjetaGrafica2,
  tarjetaGrafica3,
  tarjetaGrafica4,
  tarjetaGrafica5,
  tarjetaGrafica6,
]

export default tarjetasGraficas
