namespace octopus {
    //% block="set LED at pin %pin to %on"
    //% group="Actuators" weight=90
    export function setLED(pin: DigitalPin, on: boolean): void {
        pins.digitalWritePin(pin, on ? 1 : 0)
    }

    //% block="set relay at pin %pin to %on"
    //% group="Actuators" weight=89
    export function setRelay(pin: DigitalPin, on: boolean): void {
        pins.digitalWritePin(pin, on ? 1 : 0)
    }

    //% block="set laser at pin %pin to %on"
    //% group="Actuators" weight=88
    export function setLaser(pin: DigitalPin, on: boolean): void {
        pins.digitalWritePin(pin, on ? 1 : 0)
    }

    //% block="set fan at pin %pin to %on"
    //% group="Actuators" weight=87
    export function setFan(pin: DigitalPin, on: boolean): void {
        pins.digitalWritePin(pin, on ? 1 : 0)
    }
}
