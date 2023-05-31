import { Component } from '../componentModel.js'

const tarjetaGrafica1 = new Component(
  'NVIDIA GeForce RTX 3080',
  'Memoria GDDR6X de 10GB, velocidad de reloj de 1710MHz, ancho de banda de memoria de 760GB/s',
  700
)
const tarjetaGrafica2 = new Component(
  'AMD Radeon RX 6800 XT',
  'Memoria GDDR6 de 16GB, velocidad de reloj de 2015MHz, ancho de banda de memoria de 512GB/s',
  650
)
const tarjetaGrafica3 = new Component(
  'NVIDIA GeForce RTX 3070',
  'Memoria GDDR6 de 8GB, velocidad de reloj de 1500MHz, ancho de banda de memoria de 448GB/s',
  500
)
const tarjetaGrafica4 = new Component(
  'AMD Radeon RX 5700 XT',
  'Memoria GDDR6 de 8GB, velocidad de reloj de 1605MHz, ancho de banda de memoria de 448GB/s',
  400
)
const tarjetaGrafica5 = new Component(
  'NVIDIA GeForce GTX 1660 Super',
  'Memoria GDDR6 de 6GB, velocidad de reloj de 1530MHz, ancho de banda de memoria de 336GB/s',
  250
)
const tarjetaGrafica6 = new Component(
  'AMD Radeon RX 5500 XT',
  'Memoria GDDR6 de 8GB, velocidad de reloj de 1717MHz, ancho de banda de memoria de 224GB/s',
  200
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
