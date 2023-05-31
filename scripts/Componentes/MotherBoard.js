import { Component } from '../componentModel.js'

const tarjetaMadre1 = new Component(
  'ASUS ROG Strix B550-F Gaming (WiFi 6)',
  'Socket AM4, chipset B550, soporte para procesadores Ryzen de 3ra generación, WiFi 6, Bluetooth 5.1, LAN de 2.5Gbps, iluminación RGB',
  200
)
const tarjetaMadre2 = new Component(
  'Gigabyte B450 AORUS M',
  'Socket AM4, chipset B450, soporte para procesadores Ryzen de 2da generación, LAN Gigabit, iluminación RGB',
  80
)
const tarjetaMadre3 = new Component(
  'ASRock B450M PRO4',
  'Socket AM4, chipset B450, soporte para procesadores Ryzen de 2da generación, LAN Gigabit, formato Micro-ATX',
  70
)
const tarjetaMadre4 = new Component(
  'MSI MPG B550 GAMING EDGE WIFI',
  'Socket AM4, chipset B550, soporte para procesadores Ryzen de 3ra generación, WiFi 6, Bluetooth 5.1, LAN Gigabit, iluminación RGB',
  180
)
const tarjetaMadre5 = new Component(
  'ASUS TUF Gaming X570-PRO (WiFi 6)',
  'Socket AM4, chipset X570, soporte para procesadores Ryzen de 3ra generación, WiFi 6, Bluetooth 5.1, LAN Gigabit, iluminación RGB',
  300
)
const tarjetaMadre6 = new Component(
  'Gigabyte A520M S2H',
  'Socket AM4, chipset A520, soporte para procesadores Ryzen de 3ra generación, LAN Gigabit, formato Micro-ATX',
  60
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
