import { Component, ID } from '../componentModel.js'

const id = ID()
id.set_prefijo('GI-CASE-')
id.set_sequencia(770)

const gabinete1 = new Component(
  id.generarID(),
  'NZXT H510 Elite',
  150,
  'Gabinete'
)
const gabinete2 = new Component(
  id.generarID(),
  'Lian Li Lancool II Mesh',
  100,
  'Gabinete'
)
const gabinete3 = new Component(
  id.generarID(),
  'Fractal Design Meshify C',
  90,
  'Gabinete'
)
const gabinete4 = new Component(
  id.generarID(),
  'Corsair iCUE 465X RGB',
  150,
  'Gabinete'
)
const gabinete5 = new Component(
  id.generarID(),
  'Phanteks Eclipse P400A',
  85,
  'Gabinete'
)
const gabinete6 = new Component(
  id.generarID(),
  'Cooler Master MasterCase H500M',
  200,
  'Gabinete'
)

export const gabinetes = [
  gabinete1,
  gabinete2,
  gabinete3,
  gabinete4,
  gabinete5,
  gabinete6,
]

export default gabinetes
