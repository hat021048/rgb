let blå = 0
let grønn = 0
let rød = 0
basic.forever(function () {
    blå = randint(0, 1)
    grønn = randint(0, 1)
    rød = randint(0, 1)
    pins.digitalWritePin(DigitalPin.P0, blå)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P1, grønn)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P2, rød)
    basic.pause(100)
})
