import { Component, ID } from '../componentModel.js'

const id = ID()
id.set_prefijo('GI-DIS-')
id.set_sequencia(220)

const disipador1 = new Component(
  id.generarID(),
  'Noctua NH-D15',
  90,
  'Disipador'
)
const disipador2 = new Component(
  id.generarID(),
  'be quiet! Dark Rock Pro 4',
  80,
  'Disipador'
)
const disipador3 = new Component(
  id.generarID(),
  'Corsair iCUE H150i ELITE CAPELLIX',
  200,
  'Disipador'
)
const disipador4 = new Component(
  id.generarID(),
  'Cooler Master Hyper 212 RGB Black Edition',
  40,
  'Disipador'
)
const disipador5 = new Component(
  id.generarID(),
  'Arctic Freezer 34 eSports DUO',
  50,
  'Disipador'
)
const disipador6 = new Component(
  id.generarID(),
  'NZXT Kraken X73',
  180,
  'Disipador'
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
