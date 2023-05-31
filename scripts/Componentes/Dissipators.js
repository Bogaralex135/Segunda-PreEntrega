import { Component } from '../scripts/componentModel.js'

const disipador1 = new Component(
  'Noctua NH-D15',
  '2 ventiladores de 140mm, compatibilidad con sockets AM4 e Intel LGA1200, diseño de doble torre para una refrigeración óptima',
  90
)
const disipador2 = new Component(
  'be quiet! Dark Rock Pro 4',
  '2 ventiladores de 120mm, compatibilidad con sockets AM4 e Intel LGA1200, diseño de doble torre para una refrigeración silenciosa',
  80
)
const disipador3 = new Component(
  'Corsair iCUE H150i ELITE CAPELLIX',
  '3 ventiladores de 120mm, compatibilidad con sockets AM4 e Intel LGA1200, refrigeración líquida para un rendimiento excepcional',
  200
)
const disipador4 = new Component(
  'Cooler Master Hyper 212 RGB Black Edition',
  '1 ventilador de 120mm, compatibilidad con sockets AM4 e Intel LGA1200, diseño de torre para una refrigeración eficiente',
  40
)
const disipador5 = new Component(
  'Arctic Freezer 34 eSports DUO',
  '2 ventiladores de 120mm, compatibilidad con sockets AM4 e Intel LGA1200, diseño de torre para una refrigeración eficiente con una estética atractiva',
  50
)
const disipador6 = new Component(
  'NZXT Kraken X73',
  '3 ventiladores de 120mm, compatibilidad con sockets AM4 e Intel LGA1200, refrigeración líquida para un rendimiento superior con un diseño atractivo',
  180
)

export const disipadores = [
  disipador1,
  disipador2,
  disipador3,
  disipador4,
  disipador5,
  disipador6,
]

export default disipadores
