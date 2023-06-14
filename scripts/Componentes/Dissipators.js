import { Component, ID } from '../componentModel.js'

const id = ID()
id.set_prefijo('GI-DIS-')
id.set_sequencia(220)

const Noctua_NH_D15 = new Component(
  id.generarID(),
  'Noctua NH-D15',
  90,
  'Disipador'
)
const be_Quiet_Dark_Rock_Pro_4 = new Component(
  id.generarID(),
  'be quiet! Dark Rock Pro 4',
  80,
  'Disipador'
)
const Corsair_iCUE_H150i_ELITE_CAPELLIX = new Component(
  id.generarID(),
  'Corsair iCUE H150i ELITE CAPELLIX',
  200,
  'Disipador'
)
const Cooler_Master_Hyper_212_RGB_Black_Edition = new Component(
  id.generarID(),
  'Cooler Master Hyper 212 RGB Black Edition',
  40,
  'Disipador'
)
const Arctic_Freezer_34_eSports_DUO = new Component(
  id.generarID(),
  'Arctic Freezer 34 eSports DUO',
  50,
  'Disipador'
)
const NZXT_Kraken_X73 = new Component(
  id.generarID(),
  'NZXT Kraken X73',
  180,
  'Disipador'
)

export const disipadores = [
  Noctua_NH_D15,
  be_Quiet_Dark_Rock_Pro_4,
  Corsair_iCUE_H150i_ELITE_CAPELLIX,
  Cooler_Master_Hyper_212_RGB_Black_Edition,
  Arctic_Freezer_34_eSports_DUO,
  NZXT_Kraken_X73,
]

export default disipadores
