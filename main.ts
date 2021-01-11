radio.onReceivedNumber(function (receivedNumber) {
    // Distància entre dos micro:bit
    basic.showNumber(Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength) + 42))
})
let Tira = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
let rango = Tira.range(0, 3)
wuKong.setLightMode(wuKong.LightMode.OFF)
radio.setGroup(125)
wuKong.lightIntensity(25)
wuKong.setLightMode(wuKong.LightMode.BREATH)
Tira.showColor(neopixel.colors(NeoPixelColors.Purple))
Tira.showRainbow(1, 45)
basic.forever(function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showNumber(Tira.length())
})
