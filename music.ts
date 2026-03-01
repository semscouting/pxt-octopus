namespace octopus {
    //% block="play tone %freq Hz for %ms ms"
    //% group="Sound" weight=80
    export function tone(freq: number, ms: number): void {
        music.playTone(freq, ms)
    }

    //% block="play happy melody"
    //% group="Sound" weight=79
    export function melodyHappy(): void {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    }

    //% block="play sad melody"
    //% group="Sound" weight=78
    export function melodySad(): void {
        music.playMelody("E D C -", 120)
    }
}
