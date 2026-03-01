namespace octopus {
    //% block="light sensor at pin %pin"
    //% group="Sensors" weight=100
    export function light(pin: AnalogPin): number {
        return pins.analogReadPin(pin)
    }

    //% block="trimpot at pin %pin"
    //% group="Sensors" weight=99
    export function trimpot(pin: AnalogPin): number {
        return pins.analogReadPin(pin)
    }

    //% block="PIR motion at pin %pin"
    //% group="Sensors" weight=98
    export function pir(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 1
    }

    //% block="button at pin %pin is pressed"
    //% group="Sensors" weight=97
    export function buttonPressed(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 0
    }

    //% block="ultrasonic trig %trig|echo %echo"
    //% group="Sensors" weight=96
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
