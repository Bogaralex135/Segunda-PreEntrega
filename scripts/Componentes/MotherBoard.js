import { Component, ID } from '../componentModel.js'

const id = ID()
id.set_prefijo('GI-MB-')
id.set_sequencia(330)

const ASUS_ROG_Strix_B550_F = new Component(
  id.generarID(),
  'ASUS ROG Strix B550-F Gaming (WiFi 6)',
  200,
  'Tarjeta Madre'
)
const Gigabyte_B450_AORUS_M = new Component(
  id.generarID(),
  'Gigabyte B450 AORUS M',
  80,
  'Tarjeta Madre'
)
const ASRock_B450M_PRO4 = new Component(
  id.generarID(),
  'ASRock B450M PRO4',
  70,
  'Tarjeta Madre'
)
const MSI_MPG_B550_GAMING = new Component(
  id.generarID(),
  'MSI MPG B550 GAMING EDGE WIFI',
  180,
  'Tarjeta Madre'
)
const ASUS_TUF_Gaming_X570_PRO = new Component(
  id.generarID(),
  'ASUS TUF Gaming X570-PRO (WiFi 6)',
  300,
  'Tarjeta Madre'
)
const Gigabyte_A520M = new Component(
  id.generarID(),
  'Gigabyte A520M S2H',
  60,
  'Tarjeta Madre'
)

export const tarjetasMadre = [
  ASUS_ROG_Strix_B550_F,
  Gigabyte_B450_AORUS_M,
  ASRock_B450M_PRO4,
  MSI_MPG_B550_GAMING,
  ASUS_TUF_Gaming_X570_PRO,
  Gigabyte_A520M,
]

export default tarjetasMadre
