namespace octopus {
    //% block="Octopus light sensor at %pin"
    //% group="Octopus Sensors" weight=100
    export function lightSensor(pin: AnalogPin): number {
        return pins.analogReadPin(pin)
    }

    //% block="Octopus trimpot at %pin"
    //% group="Octopus Sensors" weight=99
    export function trimpot(pin: AnalogPin): number {
        return pins.analogReadPin(pin)
    }

    //% block="Octopus PIR motion at %pin"
    //% group="Octopus Sensors" weight=98
    export function pirMotion(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 1
    }

    //% block="Octopus button at %pin pressed"
    //% group="Octopus Sensors" weight=97
    export function buttonPressed(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 0
    }

    //% block="Octopus ultrasonic trig %trig|echo %echo (cm)"
    //% group="Octopus Sensors" weight=96
    export function ultrasonicCm(trig: DigitalPin, echo: DigitalPin): number {
        pins.setPull(echo, PinPullMode.PullNone)
        pins.digitalWritePin(trig, 0)
        control.waitMicros(2)
        pins.digitalWritePin(trig, 1)
        control.waitMicros(10)
        pins.digitalWritePin(trig, 0)
        return Math.idiv(pins.pulseIn(echo, PulseValue.High, 30000), 58)
    }
}
