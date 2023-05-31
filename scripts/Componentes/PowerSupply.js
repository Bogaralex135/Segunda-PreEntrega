import { Component } from '../componentModel.js'

const fuentePoder1 = new Component(
  'Corsair RM850x',
  'Potencia de 850W, certificación 80+ Gold, cables totalmente modulares, ventilador de 135mm con control de velocidad',
  140
)
const fuentePoder2 = new Component(
  'EVGA SuperNOVA 750 G5',
  'Potencia de 750W, certificación 80+ Gold, cables totalmente modulares, ventilador de 135mm con control de velocidad',
  120
)
const fuentePoder3 = new Component(
  'Seasonic FOCUS GX-850',
  'Potencia de 850W, certificación 80+ Gold, cables totalmente modulares, ventilador de 120mm con control de velocidad',
  135
)
const fuentePoder4 = new Component(
  'be quiet! Straight Power 11 Platinum 750W',
  'Potencia de 750W, certificación 80+ Platinum, cables totalmente modulares, ventilador de 135mm con control de velocidad',
  170
)
const fuentePoder5 = new Component(
  'Thermaltake Toughpower Grand RGB 850W',
  'Potencia de 850W, certificación 80+ Gold, cables totalmente modulares, ventilador de 140mm con iluminación RGB',
  160
)
const fuentePoder6 = new Component(
  'Cooler Master MWE Gold 750 V2',
  'Potencia de 750W, certificación 80+ Gold, cables totalmente modulares, ventilador de 120mm con control de velocidad',
  100
)

export const fuentesDePoder = [
  fuentePoder1,
  fuentePoder2,
  fuentePoder3,
  fuentePoder4,
  fuentePoder5,
  fuentePoder6,
]

export default fuentesDePoder
