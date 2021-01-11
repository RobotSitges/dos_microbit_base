radio.onReceivedNumber(function (receivedNumber) {
    // Distància entre dos micro:bit
    basic.showNumber(Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength) + 42))
})
radio.setGroup(125)
basic.forever(function () {
    basic.showIcon(IconNames.SmallDiamond)
})
