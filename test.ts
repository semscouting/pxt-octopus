basic.forever(function () {
    let v = octopus.light(AnalogPin.P1)
    led.plotBarGraph(v, 1023)
})
