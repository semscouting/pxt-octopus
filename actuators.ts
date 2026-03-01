namespace octopus {
    //% block="Octopus LED at %pin set %on"
    //% group="Octopus Actuators" weight=90
    export function ledSet(pin: DigitalPin, on: boolean): void {
        pins.digitalWritePin(pin, on ? 1 : 0)
    }

    //% block="Octopus relay at %pin set %on"
    //% group="Octopus Actuators" weight=89
    export function relaySet(pin: DigitalPin, on: boolean): void {
        pins.digitalWritePin(pin, on ? 1 : 0)
    }

    //% block="Octopus laser at %pin set %on"
    //% group="Octopus Actuators" weight=88
    export function laserSet(pin: DigitalPin, on: boolean): void {
        pins.digitalWritePin(pin, on ? 1 : 0)
    }

    //% block="Octopus fan at %pin set %on"
    //% group="Octopus Actuators" weight=87
    export function fanSet(pin: DigitalPin, on: boolean): void {
        pins.digitalWritePin(pin, on ? 1 : 0)
    }
}
