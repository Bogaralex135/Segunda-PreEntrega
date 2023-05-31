import { Component, ID } from '../componentModel.js'

const id = ID()
id.set_prefijo('GI-MB-')
id.set_sequencia(330)

const tarjetaMadre1 = new Component(
  id.generarID(),
  'ASUS ROG Strix B550-F Gaming (WiFi 6)',
  200,
  'Tarjeta Madre'
)
const tarjetaMadre2 = new Component(
  id.generarID(),
  'Gigabyte B450 AORUS M',
  80,
  'Tarjeta Madre'
)
const tarjetaMadre3 = new Component(
  id.generarID(),
  'ASRock B450M PRO4',
  70,
  'Tarjeta Madre'
)
const tarjetaMadre4 = new Component(
  id.generarID(),
  'MSI MPG B550 GAMING EDGE WIFI',
  180,
  'Tarjeta Madre'
)
const tarjetaMadre5 = new Component(
  id.generarID(),
  'ASUS TUF Gaming X570-PRO (WiFi 6)',
  300,
  'Tarjeta Madre'
)
const tarjetaMadre6 = new Component(
  id.generarID(),
  'Gigabyte A520M S2H',
  60,
  'Tarjeta Madre'
)

export const tarjetasMadre = [
  tarjetaMadre1,
  tarjetaMadre2,
  tarjetaMadre3,
  tarjetaMadre4,
  tarjetaMadre5,
  tarjetaMadre6,
]

export default tarjetasMadre
