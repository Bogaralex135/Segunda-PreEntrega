import { Component, ID } from '../componentModel.js'

const id = ID()
id.set_prefijo('GI-RAM-')
id.set_sequencia(440)

const memoriaRam1 = new Component(
  id.generarID(),
  'Corsair Vengeance LPX 16GB DDR4 3200MHz C16 XMP 2.0',
  90,
  'RAM'
)
const memoriaRam2 = new Component(
  id.generarID(),
  'G.Skill Trident Z RGB 16GB DDR4 3600MHz C16',
  130,
  'RAM'
)
const memoriaRam3 = new Component(
  id.generarID(),
  'Kingston HyperX Fury RGB 16GB DDR4 3200MHz',
  95,
  'RAM'
)
const memoriaRam4 = new Component(
  id.generarID(),
  'Crucial Ballistix RGB 16GB DDR4 3600MHz C16',
  120,
  'RAM'
)
const memoriaRam5 = new Component(
  id.generarID(),
  'Team T-Force Delta RGB 16GB DDR4 3200MHz C16',
  85,
  'RAM'
)
const memoriaRam6 = new Component(
  id.generarID(),
  'Corsair Dominator Platinum RGB 16GB DDR4 3200MHz C16',
  150,
  'RAM'
)

export const memoriasRam = [
  memoriaRam1,
  memoriaRam2,
  memoriaRam3,
  memoriaRam4,
  memoriaRam5,
  memoriaRam6,
]
export default memoriasRam
