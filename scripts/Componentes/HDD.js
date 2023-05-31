import { Component, ID } from '../componentModel.js'

const id = ID()
id.set_prefijo('GI-HDD-')
id.set_sequencia(550)

const almacenamiento1 = new Component(
  id.generarID(),
  'Samsung 970 EVO Plus 1TB',
  180,
  'HDD'
)
const almacenamiento2 = new Component(
  id.generarID(),
  'Crucial MX500 1TB 3D NAND SATA 2.5 Inch Internal SSD',
  110,
  'HDD'
)
const almacenamiento3 = new Component(
  id.generarID(),
  'Seagate BarraCuda 2TB Internal Hard Drive HDD',
  55,
  'HDD'
)
const almacenamiento4 = new Component(
  id.generarID(),
  'WD Blue SN550 1TB NVMe Internal SSD',
  105,
  'HDD'
)
const almacenamiento5 = new Component(
  id.generarID(),
  'Toshiba X300 4TB Performance Desktop and Gaming Hard Drive',
  120,
  'HDD'
)
const almacenamiento6 = new Component(
  id.generarID(),
  'Intel 660p 1TB NVMe Internal SSD',
  120,
  'HDD'
)

export const discos = [
  almacenamiento1,
  almacenamiento2,
  almacenamiento3,
  almacenamiento4,
  almacenamiento5,
  almacenamiento6,
]
export default discos
