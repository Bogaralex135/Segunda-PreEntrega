import { Component, ID } from '../componentModel.js'

const id = ID()
id.set_prefijo('GI-PS-')
id.set_sequencia(880)

const fuentePoder1 = new Component(
  id.generarID(),
  'Corsair RM850x',
  140,
  'Fuente de Poder'
)
const fuentePoder2 = new Component(
  id.generarID(),
  'EVGA SuperNOVA 750 G5',
  120,
  'Fuente de Poder'
)
const fuentePoder3 = new Component(
  id.generarID(),
  'Seasonic FOCUS GX-850',
  135,
  'Fuente de Poder'
)
const fuentePoder4 = new Component(
  id.generarID(),
  'be quiet! Straight Power 11 Platinum 750W',
  170,
  'Fuente de Poder'
)
const fuentePoder5 = new Component(
  id.generarID(),
  'Thermaltake Toughpower Grand RGB 850W',
  160,
  'Fuente de Poder'
)
const fuentePoder6 = new Component(
  id.generarID(),
  'Cooler Master MWE Gold 750 V2',
  100,
  'Fuente de Poder'
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
